"""change datetime to date

Revision ID: f87bbfd0d762
Revises: 09fb83272930
Create Date: 2024-02-12 13:58:17.262680

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f87bbfd0d762'
down_revision = '09fb83272930'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('words', schema=None) as batch_op:
        batch_op.alter_column('usage_date',
               existing_type=sa.DATETIME(),
               type_=sa.Date(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('words', schema=None) as batch_op:
        batch_op.alter_column('usage_date',
               existing_type=sa.Date(),
               type_=sa.DATETIME(),
               existing_nullable=True)

    # ### end Alembic commands ###
