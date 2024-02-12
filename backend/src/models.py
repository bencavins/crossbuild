from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.ext.hybrid import hybrid_property, hybrid_method
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
})

db = SQLAlchemy(metadata=metadata)


class Word(db.Model, SerializerMixin):
    __tablename__ = 'words'

    __table_args__ = (
        db.CheckConstraint('LENGTH(word) = length', 'check_word_len'),
    )

    serialize_rules = ['-_word', 'word']  # ignore _word, add word

    id = db.Column(db.Integer, primary_key=True)
    _word = db.Column("word", db.String, nullable=False)
    clue = db.Column(db.String, nullable=False)
    length = db.Column(db.Integer, nullable=False)
    usage_date = db.Column(db.Date)

    @hybrid_property
    def word(self):
        return self._word
    
    @word.setter
    def word(self, value):
        self._word = value
        self.length = len(value) if value is not None else None

    def __repr__(self):
        return f"<Word {self.word} {self.length}>"