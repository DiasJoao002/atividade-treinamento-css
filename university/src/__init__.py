from flask import Flask

app = Flask(__name__, template_folder='../templates', static_folder='../static')

app.config["SECRET_KEY"] = "7cdf34af477ba6542d1e749a8953649a"
