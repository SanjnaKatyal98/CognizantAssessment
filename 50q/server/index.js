const websocket = require("ws");
const wss = new websocket.Server({port:9000});
let msg = null;
wss.on("connection",(ws)=>{
    console.info("New Client got Connected");
    ws.on('message',(msg)=>{
        let data = msg.toString();
        console.log(`Received Data:${data}`);
        num1 = parseInt(data.split(" ")[0]);
        num2 = parseInt(data.split(" ")[1]);
        op = data.split(" ")[2];
        console.log(num1 + " " + num2 + " " + op);
        let res;
        switch(op){
            case "add": res = num1 + num2;break;
            case "sub": res = num1 - num2;break;
            case "mul": res = num1 * num2;break;
            case "div": res = num1 / num2;break;
        }
        console.log(res);
        ws.send(res);
    });

    ws.on('close',()=>{
        console.info("Client Disconnected");
    })
    ws.on('error',()=>{
        console.error("Error Occured");
    })
});