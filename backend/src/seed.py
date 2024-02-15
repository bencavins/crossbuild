import csv
from datetime import datetime

from app import app
from models import db, Word, Clue


DATASET_PATH = 'datasets/nytcrosswords.csv'


def build_dict():
    """
    Returns a dict of format:
    {word: [(date, clue)]}
    """
    with open(DATASET_PATH, 'r', encoding='iso-8859-1') as f:
        reader = csv.reader(f, delimiter=',')

        # Date, Word, Clue
        next(reader)  # skip header

        data = {}
        for row in reader:
            data.setdefault(row[1], []).append((row[0], row[2]))

    return data


def add_to_db(data):
    for word_text in data:
        word = Word(word=word_text)
        db.session.add(word)
        for date, clue_text in data[word_text]:
            clue = Clue(
                text=clue_text,
                usage_date=datetime.strptime(date, '%m/%d/%Y'),
                word=word
            )
            db.session.add(clue)
    db.session.commit()


def run():
    with app.app_context():
        print('Deleting data...')
        Clue.query.delete()
        Word.query.delete()

        print('Scanning file...')
        data = build_dict()
        
        print('Populating database...')
        add_to_db(data)


if __name__ == '__main__':
    run()