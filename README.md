# Backend-Project
a school assingment to create a backend project to a todoMVC

Jag var tvungen att avika fr�n min orginal id� d�r jag hade hoppats p� att skapa en lista f�r varje dag.
Ist�llet s� blev det bara en todo lista som h�ller koll p� alla dina todos du har skrivit in. 

Jag anv�nde mig av Hibernate f�r att kommunicera med min MySQL databas d� jag k�nde att det var l�ttast d� det 
finns s� m�nga tutorials p� internet om hur man anv�nder det.

Inom kort deadline s� har jag beh�vt stressa fram en hel del s� allting �r inte s� v�l dokumenterat som jag hade velat,
fick tex inte leka s� mycket med javadocs.

N�r det kommer till restful api anropet s� har jag anv�nt mig och springs egna @Restcontroller
och anv�nder "jackson" f�r att skriva POJOS till JSON och tv�rt om.
Det ska g� att g�ra anropet i "Postman" f�r att f� alla todos i JSON format.

H�r �r Postman anrop fr�n min dator:
http://localhost:8080/myBackendProject/api/todos

{"id":1,"isCompleted":false,"todo":"jump up the platform"},{"id":14,"isCompleted":true,"todo":"go on a shopping spree"},{"id":15,"isCompleted":false,"todo":"go to the gym"}]



Det finns med 2 MySQL scripts som du kan l�gga in i mysql workbench ifall du vill testa starta projektet :)

Hade aldrig anv�nt Git innan det h�r projektet men nu n�r jag v�l f�tt l�ra mig det lite grann s� vill jag aldrig
g� tillbaka, har r�ddat mitt projekt flera g�nger d� jag lekte med n�got och fick allt att krasha. :)


I min main.jsp s� har jag anv�nt mig av "JSTL core tags" f�r att mata fram todos som existerar i databasen.
Har ocks� anv�nt mig av "Springs" egna "Form tags" f�r att addera, updatera och radera todos. 

