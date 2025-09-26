from . import app
from flask import render_template
from .forms import FormEntrarContato

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/contato')
def contato():
    formentrarcontato = FormEntrarContato()
    return render_template('contato.html', form=formentrarcontato)