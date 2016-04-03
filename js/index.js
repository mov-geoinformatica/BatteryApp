/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function onLoad(){
	document.addEventListener('deviceready', this.onDeviceReady, false);
}


function onDeviceReady(){
	console.log('Received Event OnDeviceReady');
	window.addEventListener('batterystatus',onBatteryStatus);

}

function onBatteryStatus(status) {
	console.log('BatteryStatus');
	
	if((status.level==100)&&(status.isPlugged)){
		navigator.notification.beep(1);
		document.getElementById('imagen').className='fullAC';		
	}
	else if(status.isPlugged){
		document.getElementById('imagen').className='charging';	
	}
	else if(status.level>80){
		document.getElementById('imagen').className='full';
	}
	else if(status.level>60){
		document.getElementById('imagen').className='almostfull';
	}
	else if(status.level>20){
		document.getElementById('imagen').className='bmedium';
	}
	else if (status.level>10){
		document.getElementById('imagen').className='blow';
	}
	else{
		document.getElementById('imagen').className='empty';		
	}

	var content = 'Nivel: ' + status.level + ' , cargando: ';
	if(status.isPlugged) 
		content += 'sí';
	else
		content += 'no';
	document.getElementById('estado').innerHTML = content;
}
