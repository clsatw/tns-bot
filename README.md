
# tns-bot // git repository
tns roachbot
at cmd prompt, tns preview

git version 2 works - 10/24/2019

#change history:
    5/20/2020   mqtt.ts - change http to https for api calls
    
tns deplpy android

1. apt-get install mosquitto on the linux box
2. sudo service mosquitto restart
    sudo service mosquitto stop
    sudo mosquitto -v   // for debugging
3. turn to use node mqtt to publish msg by adding mqtt codes in server.js
4. test on browser:
    upload codes to nodemcu
     http://ajoan.com/moveCar?devId=xxxx&payload=50,10,0,0
5. to keep track of logs - mosquitto -v


ios:
    remove <pag> tag, otherwise bulid error arises.
    disable https in iphone settings
    in iphone, settings>general>profiles & device mgmt to establish trust for the developer.
    tns platform add ios
    tns prepare ios
    tns deploy ios when iphone is plugged in.
    getting signing profile and certificate in xcode.
   $ tns resources generate icons <Path to image>	Generate all icons for Android and iOS based on the specified image

   tns resources generate splashes e:\1\l.png --background "#99d9ea"