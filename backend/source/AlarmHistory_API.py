from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import pandas as pd

app = Flask(__name__)
CORS(app)

# 데이터베이스 연결 함수
def connect_to_db():
    return sqlite3.connect('/home/dmyang/grafana_test/grafana/data/grafana.db')

# 데이터 조회 함수
def query_data():
    conn = connect_to_db()
    query = "SELECT * FROM alert_rule;"
    df = pd.read_sql_query(query, conn)
    conn.close()
    return df.to_json(orient='records')

# 루트 엔드포인트
@app.route('/')
def index():
    return "Flask App for Grafana Data"

# 데이터 엔드포인트
@app.route('/data')
def get_data():
    data = query_data()
    print(data)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)