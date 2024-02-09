from flask import Flask
from flask_migrate import Migrate
from dotenv import dotenv_values

from models import db


env_values = dotenv_values()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = env_values.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
Migrate(app, db)

@app.route('/')
def get_root():
    return '<h1>Hello!</h1>'
