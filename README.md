# Backend-Project
a school assingment to create a backend project to a todoMVC

Jag var tvungen att avika från min orginal idé där jag hade hoppats på att skapa en lista för varje dag.
Istället så blev det bara en todo lista som håller koll på alla dina todos du har skrivit in. 

Jag använde mig av Hibernate för att kommunicera med min MySQL databas då jag kände att det var lättast då det 
finns så många tutorials på internet om hur man använder det.

Inom kort deadline så har jag behövt stressa fram en hel del så allting är inte så väl dokumenterat som jag hade velat,
fick tex inte leka så mycket med javadocs.

När det kommer till restful api anropet så har jag använt mig och springs egna @Restcontroller
och använder "jackson" för att skriva POJOS till JSON och tvärt om.
Det ska gå att göra anropet i "Postman" för att få alla todos i JSON format.

Här är Postman anrop från min dator:
http://localhost:8080/myBackendProject/api/todos

{"id":1,"isCompleted":false,"todo":"jump up the platform"},{"id":14,"isCompleted":true,"todo":"go on a shopping spree"},{"id":15,"isCompleted":false,"todo":"go to the gym"}]



Det finns med 2 MySQL scripts som du kan lägga in i mysql workbench ifall du vill testa starta projektet :)

Hade aldrig använt Git innan det här projektet men nu när jag väl fått lära mig det lite grann så vill jag aldrig
gå tillbaka, har räddat mitt projekt flera gånger då jag lekte med något och fick allt att krasha. :)


I min main.jsp så har jag använt mig av "JSTL core tags" för att mata fram todos som existerar i databasen.
Har också använt mig av "Springs" egna "Form tags" för att addera, updatera och radera todos. 

