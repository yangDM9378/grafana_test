from flask import Flask
from flask_cors import CORS
from main_API import main_api
from alarmHistory_API import alarm_history_api
# from sms_API import sms_api

app = Flask(__name__)
CORS(app)

# Blueprint 등록
app.register_blueprint(main_api)
app.register_blueprint(alarm_history_api)
# app.register_blueprint(sms_api)

if __name__ == '__main__':
    app.run(debug=True)