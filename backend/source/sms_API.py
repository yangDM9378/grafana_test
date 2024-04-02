from flask import Blueprint, request
import time
import base64
import hashlib
import hmac

sms_api = Blueprint('sms_api', __name__)

# 문자 발송 로직
def sendmsg(message):
  return

# 루트 엔드포인트
@sms_api.route('/send', methods=['POST'])
def send_sms():
    message = 'alert 아님'
    alert_data = request.json
    if alert_data['status'] == 'firing':
        message = f"알람 제목은 {alert_data['title']} 발생 시간은 {alert_data['alerts'][0]['startsAt']}"
        # sendmsg(message)
    print(message)
    return message


