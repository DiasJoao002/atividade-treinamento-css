from university import app
from flask import render_template
from university.forms import FormEntrarContato

@app.route('/')
def homepage():
    return render_template('home.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/contato')
def contato():
    formentrarcontato = FormEntrarContato()
    return render_template('contato.html', form=formentrarcontato)