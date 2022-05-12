SystemUtil.Run("C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe")

wait(4) @@ hightlight id_;_396614_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "JOHN" @@ hightlight id_;_2014868224_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "627d355a2ee21cccef30" @@ hightlight id_;_1885756072_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1885758424_;_script infofile_;_ZIP::ssf8.xml_;_

wait(4)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1985568032_;_script infofile_;_ZIP::ssf9.xml_;_
wait(2)
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1985497448_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1882801448_;_script infofile_;_ZIP::ssf11.xml_;_
wait(4)
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "prem" @@ hightlight id_;_2014142104_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1882803800_;_script infofile_;_ZIP::ssf13.xml_;_
wait(4) @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_462172_;_script infofile_;_ZIP::ssf14.xml_;_
