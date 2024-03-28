from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime
from collections import defaultdict
import json
import re

app = Flask(__name__)
CORS(app)

# 데이터베이스 연결 함수
def connect_to_db():
    conn = sqlite3.connect('/home/dmyang/grafana_test/grafana/data/grafana.db')
    conn.row_factory = sqlite3.Row
    return conn
    

# 데이터 조회 함수
def alarm_history_query_data():
    conn = connect_to_db()
    cur = conn.cursor()
    query = "SELECT * FROM alarm_history;"
    cur.execute(query)
    rows = cur.fetchall()
    data = []
    for row in rows:
        data.append(dict(row))
    conn.close()
    return data

# 루트 엔드포인트
@app.route('/')
def index():
    return "Flask App for Grafana Data"

# 데이터 엔드포인트
@app.route('/alarmhistory', methods=['GET'])
def get_data():
    data = alarm_history_query_data()
    alarm_history_response = defaultdict(list)

    for da in data:
        temp_dic={}
        created_timestamp = datetime.fromtimestamp(da['alert_time']/1000)
        # 날짜 값
        year = str(created_timestamp.year)
        month = str(created_timestamp.month).zfill(2)
        day = str(created_timestamp.day).zfill(2)
        date = f"{year}.{month}.{day}"

        # time 처리
        hours = str(created_timestamp.hour).zfill(2)
        minutes = str(created_timestamp.minute).zfill(2)
        seconds = str(created_timestamp.second).zfill(2)
        time = f"{hours}:{minutes}:{seconds}"
        
        # 서버 명 및 IP

        # 알람 메시지
        rule_data_json = json.loads(da['rule_data'])
        pattern = re.compile(r'^[^{]*')
        MetricMatch = pattern.match(rule_data_json[0]["model"]["expr"])
        MetricText = MetricMatch[0] if MetricMatch else ''
        referenceValue = rule_data_json[2]["model"]["conditions"][0]["evaluator"]["params"][0]
        conditionType = rule_data_json[2]["model"]["conditions"][0]["evaluator"]["type"]
        conditionText = '규칙이 잘못됨'
        if conditionType == 'lt':
            conditionText = '낮'
        else:
            conditionText = '높'
        alertHistoryMessage = f"Metric {MetricText}이 기준값 {referenceValue}보다 {conditionText}습니다."
        print(alertHistoryMessage)

        # response 값
        temp_dic['Date']=date
        temp_dic['Time']=time
        temp_dic['Message']=alertHistoryMessage
        alarm_history_response[date].append(temp_dic)
    return jsonify(alarm_history_response)

if __name__ == '__main__':
    app.run(debug=True)


    