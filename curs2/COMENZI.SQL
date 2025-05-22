-- Afișează data și ora curente (format complet)
SELECT NOW();

-- Afișează doar data curentă (fără oră)
SELECT CURDATE();

-- Afișează ora curentă
SELECT CURTIME();

-- Selectează toate coloanele din tabelul student
SELECT * FROM student;

-- Selectează toate coloanele din tabelul profesor
SELECT * FROM profesor;

-- Selectează toate coloanele din tabelul cursuri
SELECT * FROM cursuri;

-- Selectează doar titlul cursului din tabela cursuri
SELECT titlu_curs FROM cursuri;

-- Selectează doar coloanele nume și prenume din tabelul student
SELECT nume, prenume FROM student;

-- Elimină duplicatele și returnează numele unice ale studenților
SELECT DISTINCT nume FROM student;

-- Selectează toți studenții din anul 1 sau 2 (metode echivalente)
SELECT * FROM student WHERE an >= 1 AND an < 3;
SELECT * FROM student WHERE an = 1 OR an = 2;
SELECT * FROM student WHERE an BETWEEN 1 AND 2;

-- Selectează toți studenții care nu au bursă
SELECT * FROM student WHERE bursa IS NULL;

-- Selectează toți studenții care au bursă
SELECT * FROM student WHERE bursa IS NOT NULL;

-- Calculează suma totală a burselor
SELECT SUM(bursa) AS total_burse FROM student;

-- Calculează suma burselor doar pentru studenții din anul 1
SELECT SUM(bursa) AS total_burse_an1 FROM student WHERE an = 1;

-- Calculează media burselor
SELECT AVG(bursa) AS media_burselor FROM student;

-- Calculează bursa minimă și maximă
SELECT MIN(bursa) AS bursa_minima, MAX(bursa) AS bursa_maxima FROM student;

-- Actualizează statusul "bursier" pentru studenții care au bursă
UPDATE student SET status = 'bursier' WHERE bursa IS NOT NULL;

-- Afișează numele și prenumele profesorilor cu aliasuri personalizate
SELECT nume AS nume_profesor, prenume AS prenume_profesor FROM profesor;

-- Afișează numele și prenumele cu spațiu în alias (cu ghilimele duble)
SELECT nume AS "Nume Profesor", prenume AS "Prenume Profesor" FROM profesor;

-- Grupare după anul de studiu și numărare studenți per an
SELECT an AS An, COUNT(id) AS "Nr.Studenti" FROM student GROUP BY an;

-- Grupare și filtrare (doar anii cu cel puțin 9 studenți)
SELECT an, COUNT(id) AS nr_student FROM student GROUP BY an HAVING nr_student >= 9;

-- Selectează cursurile din anul 2, semestrul 2
SELECT * FROM cursuri WHERE an = 2 AND semestru = 2;

-- Selectează studenții al căror prenume începe cu "Ion"
SELECT * FROM student WHERE prenume LIKE 'Ion%';

-- Selectează studenții al căror nume conține "an" (oriunde în nume)
SELECT * FROM student WHERE nume LIKE '%an%';

-- Selectează studenții născuți pe data de 21 a oricărei luni
SELECT * FROM student WHERE DAY(data_nastere) = 21;

-- Selectează studenții cu bursă anuală mai mare de 4000
SELECT * FROM student WHERE bursa * 12 > 4000;

-- Selectează toți studenții ordonați alfabetic crescător după nume și descrescător după prenume
SELECT * FROM student ORDER BY nume ASC, prenume DESC;

-- Selectează 3 profesori aleatorii
SELECT * FROM profesor ORDER BY RAND() LIMIT 3;

-- Selectează 3 profesori aleatorii cu grad didactic 1
SELECT * FROM profesor WHERE grad_didactic = 1 ORDER BY RAND() LIMIT 3;

-- Selectează 5 studenți ordonați alfabetic după nume, dar sar primii 10
SELECT * FROM student ORDER BY nume ASC LIMIT 5 OFFSET 10;

-- Selectează toți studenții care au anul de studiu în lista (1, 2, 3)
SELECT * FROM student WHERE an IN (1, 2, 3);

-- Selectează toți studenții care NU sunt în anul 3
SELECT * FROM student WHERE an != 3;

-- Selectează doar primii 10 studenți în ordine alfabetică
SELECT * FROM student ORDER BY nume ASC LIMIT 10;


-- 1. JOIN între cursuri și note
-- Selectează id-ul cursului, titlul și nota aferentă
SELECT c.id_curs, c.titlu_curs, n.valoare 
FROM cursuri AS c 
NATURAL JOIN note AS n;

-- Număr de note pentru fiecare curs
SELECT c.titlu_curs, COUNT(n.id_nota) AS nr_note 
FROM cursuri AS c 
NATURAL JOIN note AS n 
GROUP BY n.id_curs;

-- 2. JOIN între student și note (fără condiție - greșit)
-- NU este recomandat, lipsește condiția ON
SELECT * FROM student JOIN note;
SELECT * FROM student INNER JOIN note;

-- 3. CROSS JOIN între toate tabelele
SELECT s.id FROM student AS s CROSS JOIN note AS n CROSS JOIN cursuri AS c;

-- 4. JOIN corect între student și note
SELECT s.id, n.valoare 
FROM student AS s 
INNER JOIN note AS n ON s.id = n.id_student;

-- JOIN între student și note (cu nume și prenume)
SELECT s.id, s.nume, s.prenume, n.valoare 
FROM student AS s 
INNER JOIN note AS n ON s.id = n.id_student;

-- JOIN cu filtrare pe studentul cu id 101
SELECT s.id, s.nume, s.prenume, n.valoare 
FROM student AS s 
INNER JOIN note AS n ON s.id = n.id_student 
WHERE s.id = 101;

-- JOIN între student, note și cursuri
SELECT s.id, s.nume, s.prenume, n.valoare, c.titlu_curs 
FROM student AS s 
INNER JOIN note AS n ON s.id = n.id_student 
INNER JOIN cursuri AS c ON c.id_curs = n.id_curs;

-- JOIN între cele 3 tabele + WHERE id = 101
SELECT s.id, s.nume, s.prenume, n.valoare, c.titlu_curs 
FROM student AS s 
INNER JOIN note AS n ON s.id = n.id_student 
INNER JOIN cursuri AS c ON c.id_curs = n.id_curs 
WHERE s.id = 101;

-- LEFT JOIN când un student poate să nu aibă note
SELECT s.id, s.nume, s.prenume, n.valoare, c.titlu_curs, c.id_curs 
FROM student AS s 
LEFT JOIN note AS n ON s.id = n.id_student 
INNER JOIN cursuri AS c ON c.id_curs = n.id_curs 
WHERE s.id = 101;

-- LEFT JOIN pentru studenți cu mai multe note
SELECT s.id, s.nume, s.prenume, n.valoare, c.titlu_curs, c.id_curs 
FROM student AS s 
LEFT JOIN note AS n ON s.id = n.id_student 
INNER JOIN cursuri AS c ON c.id_curs = n.id_curs 
WHERE s.id = 101;

-- JOIN între profesori și cursuri prin tabela didactic
SELECT p.nume, p.prenume, c.titlu_curs 
FROM profesor AS p 
LEFT JOIN didactic AS d ON p.id = d.id_prof 
LEFT JOIN cursuri AS c ON d.id_curs = c.id_curs 
WHERE p.id = 1;

-- 5. Subinterogări
-- Cursuri care nu sunt predate de niciun profesor
SELECT * FROM cursuri WHERE id_curs NOT IN (SELECT id_curs FROM didactic);

-- Studenți care nu au primit nicio notă
SELECT * FROM student WHERE id NOT IN (SELECT id_student FROM note);

-- Studenți cu cel puțin 2 note
SELECT id_student, COUNT(id_student) AS nr 
FROM note 
GROUP BY id_student 
HAVING nr >= 2;

-- RIGHT JOIN cu grupare și filtrare
SELECT id_student, s.nume, s.prenume, COUNT(id_student) AS nr 
FROM note AS n 
RIGHT JOIN student AS s ON n.id_student = s.id 
GROUP BY id_student 
HAVING nr >= 2;

-- LEFT JOIN echivalent cu cel de sus
SELECT id_student, s.nume, s.prenume, COUNT(id_student) AS nr 
FROM student AS s 
LEFT JOIN note AS n ON s.id = n.id_student 
GROUP BY id_student 
HAVING nr >= 2;

-- 6. UNION
-- Nume și prenume ale celor care au prenume ce încep cu 'ion' (stud. + prof.)
(SELECT nume, prenume FROM student WHERE prenume LIKE 'ion%')
UNION
(SELECT nume, prenume FROM profesor WHERE prenume LIKE 'ion%');

-- UNION cu identificare tip entitate (student sau profesor)
(SELECT nume, prenume, (CASE WHEN id > 20 THEN 'student' END) AS Type 
 FROM student WHERE prenume LIKE 'ion%')
UNION
(SELECT nume, prenume, (CASE WHEN id <= 20 THEN 'profesor' END) AS Type 
 FROM profesor WHERE prenume LIKE 'ion%');

-- 7. Medii ale studenților
-- Media notelor unui student (id=101)
SELECT s.nume, s.prenume, AVG(n.valoare) 
FROM student s 
LEFT JOIN note n ON s.id = n.id_student 
WHERE s.id = 101;

-- Media notelor pentru toți studenții
SELECT s.nume, s.prenume, AVG(n.valoare) 
FROM student s 
LEFT JOIN note n ON s.id = n.id_student 
GROUP BY s.id;

-- Media notelor pe ani de studiu
SELECT s.an, AVG(n.valoare) 
FROM student s 
LEFT JOIN note n ON s.id = n.id_student 
GROUP BY s.an;