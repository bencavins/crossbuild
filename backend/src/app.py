from flask import Flask, request
from flask_migrate import Migrate
from dotenv import dotenv_values

from models import db, Word


env_values = dotenv_values()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = env_values.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
Migrate(app, db)

def is_match(pattern, word):
    """
    Return True if the word matches the pattern
    
    Ex:
    pattern=LO-E, word=LOVE -> True
    pattern=LO-E, word=DOVE -> False
    """
    if len(pattern) != len(word):
        return False
    for charA, charB in zip(pattern, word):
        if charA == '-':  # dashes are wildcards
            continue
        elif charA != charB:
            return False
    return True

def iter_like(pattern, query):
    """Iterates over a sqlalchemy query and yields words that match the pattern"""
    for word in query:
        if is_match(pattern, word.word):
            yield word

@app.route('/')
def get_root():
    return '<h1>Hello!</h1>'

@app.route('/api/words/length/<int:length>')
def get_words_by_length(length):
    query = Word.query.filter(Word.length == length)
    return [w.to_dict() for w in query], 200

@app.route('/api/words/like/<string:pattern>')
def get_like_words(pattern):
    query = Word.query.filter(Word.length == len(pattern))
    return [w.to_dict() for w in iter_like(pattern, query)], 200
