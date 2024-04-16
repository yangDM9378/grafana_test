from flask import Blueprint, request, jsonify
import sqlite3
import json

rack_api = Blueprint('rack_api', __name__)


def connect_to_db():
    conn = sqlite3.connect('/home/dmyang/grafana_test/grafana/data/grafana.db')
    conn.row_factory = sqlite3.Row
    return conn

# 랙조회
@rack_api.route('/racks', methods=['GET'])
def get_rack_data():
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * from rack")
    racks = cursor.fetchall()
    conn.close()

    rack_list = []
    for rack in racks:
        if rack[2]:
            dashboards = json.loads[rack[2]]
        else:
            dashboards = []

        rack_info = json.loads(rack[1])
        rack_list.append({'id': rack[0], 'rackInfo': rack_info, 'dashboards': dashboards})

    return jsonify(rack_list), 200

# 랙추가
@rack_api.route('/racks/create', methods=['POST'])
def create_rack_data():
    rack_data = request.json
    rack_info = rack_data.get('rackInfo')

    if rack_info:
        rack_info_json = json.dumps(rack_info)
        conn = connect_to_db()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO rack (rack_info) VALUES (?)", (rack_info_json,))
        conn.commit()
        conn.close()

        return jsonify({'message': 'Rack 생성 완료'}), 200
    else:
        return jsonify({'error': 'rackInfo가 제공되지 않았습니다'}), 400
    

    
@rack_api.route('/racks/<rack_id>/servers', methods=['POST'])
def add_server(rack_id):
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM rack WHERE id = ?", (rack_id,))
    rack_data = cursor.fetchone()
    
    if rack_data['dashboards'] == None:
        dashboard_id_data = []
    else:
        dashboard_id_data = json.loads(rack_data['dashboards'])
    new_dashboard_id = request.json.get('newDashboardId')
    dashboard_id_data.append(new_dashboard_id)
    dashboard_id_data_str = json.dumps(dashboard_id_data)
    cursor.execute("UPDATE rack SET dashboards = ? WHERE id = ?", (dashboard_id_data_str, rack_id))
    conn.commit()
    conn.close()
    return 'Success'