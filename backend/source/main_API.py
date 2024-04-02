from flask import Blueprint

main_api = Blueprint('main_api', __name__)

# 루트 엔드포인트
@main_api.route('/')
def index():
    return "Flask App for Grafana Data"
