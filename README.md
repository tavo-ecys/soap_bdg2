# Proyecto BDG Node 2

sadd lista:desa 1 2

hmset endpoint1:desa ip localhost port 8888 endpoint /{idService} method POST wsdl http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL

hmset endpoint2:desa ip localhost port 8888 endpoint /{idService} method POST wsdl http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL

sadd lista:test 1

hmset endpoint1:test ip localhost port 8888 endpoint /{idService} method POST wsdl http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL
