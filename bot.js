'use strict'

const Slack = require('slack')

module.export.run = async (data) => {

    const dataObject = JSON.parse(data.body);
    let response = {
        StatusCode: 200,
        body : {},
        headers : {'X-Slack_N0-Retry' : 1}
    }
    try{
        switch(dataObject) {
            case 'url-verification':
                response.body = verifyCall(dataObject);
                break; 
        }
 
    }
    
    catch (error){

    }

    finally{
        return response;
    }


}

function verifyCall(data){
    if ( data.token == 'YgLm1HVMUSC457ewBg0726cg'){
        return data.challange;

    }
    else {
        throw 'Verification failed'
    }
}