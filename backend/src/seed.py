import csv
from datetime import datetime

from app import app
from models import db, Word


DATASET_PATH = 'datasets/nytcrosswords.csv'


def load_words():
    with open(DATASET_PATH, 'r', encoding='iso-8859-1') as f:
        reader = csv.reader(f, delimiter=',')

        # Date, Word, Clue
        next(reader)  # skip header

        for row in reader:
            word = Word(
                word=row[1],
                clue=row[2],
                usage_date=datetime.strptime(row[0], '%m/%d/%Y')
            )
            db.session.add(word)
    db.session.commit()


def run():
    with app.app_context():
        print('Deleting data...')
        Word.query.delete()

        print('Loading words...')
        load_words()


if __name__ == '__main__':
    run()