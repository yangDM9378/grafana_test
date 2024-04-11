from flask import Flask
from flask_cors import CORS

from main_API import main_api
from alarmHistory_API import alarm_history_api
from sms_API import sms_api

app = Flask(__name__)
CORS(app)

# email config 적는곳
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'dmyanguds@gmail.com'
app.config['MAIL_PASSWORD'] ='pptqgluniloqjbah'
app.config['MAIL_DEFAULT_SENDER'] = 'dmyanguds@gmail.com'


# Blueprint 등록
app.register_blueprint(main_api)
app.register_blueprint(alarm_history_api)
app.register_blueprint(sms_api)

if __name__ == '__main__':
    app.run(debug=True)