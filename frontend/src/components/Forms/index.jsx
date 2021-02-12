import React, { useState } from 'react';

import './Forms.css';


export function FormContact() { 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function registerContact(e){ 
          
        e.preventDefault(); 
        console.log(e.target); 
        
        let formData = new FormData(e.target)
        console.log(formData.get("name"));
        console.log(formData.get("email"));
        console.log(formData.get("subject"));
        console.log(formData.get("message"));

        let obj =  {
            name:formData.get("name"),
            email:formData.get("email"),
            subject:formData.get("subject"),
            message:formData.get("message")
         };

        let obj2 = JSON.stringify(obj);

        const url = "http://localhost:3333/contact"

        fetch(url,{ 
                  
            method: "POST", 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: obj2

        }).then((response) => response.json())
    };

    
    return (
        <form onSubmit={registerContact} action="/contact" method="post" className="form-plus mx-auto" >            
            <div className="form-row">
                <div className="form-group col-md form-style">
                    <label>Nome</label>
                    <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} 
                    placeholder="Digite seu nome" className="form-control" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6 form-style">                    
                    <label>Email</label>
                    <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail" className="form-control" required />
                </div>                    

                <div className="form-group col-md-6 form-style">
                    <label>Assunto</label>
                    <select name="subject" id="options" onChange={e => setSubject(e.target.value)}
                        className="form-control">                
                        <option selected>Escolha..</option>
                        <option value="informacao">Solicitar informação</option>
                        <option value="elogio">Elogio</option>
                        <option value="sugestao">Sugestão</option>
                        <option value="reclamacao">Reclamação</option>
                        <option value="outro">Outro</option>
                    </select>               
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md form-style">	
                    <label>Mensagem</label>
                    <textarea type="text" name="message" id="message" onChange={e => setMessage(e.target.value)}
                    placeholder="Escreva sua mensagem" rows="4" className="form-control">
                    </textarea>
                </div>
            </div>

            <div>
                <button className="btn-standard" type="submit" name="enviar">Enviar</button>
            </div>           
        </form>
    );
};