from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class FormEntrarContato(FlaskForm):
    email = StringField('E-mail')
    assunto = StringField('Assunto da Mensagem')
    descricao = StringField('Descrição da Mensagem')
    btn_submit = SubmitField('Enviar')