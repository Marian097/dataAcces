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
