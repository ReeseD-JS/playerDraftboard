const playersRTR = [
    { name: 'Jaime Jaquez', team: 'UCLA', position: 'G', gp: 31, mpg: 32.6, ppg: 17.5, fgp: 48.7, ftp: 77, tpp: 32.1, rtr: 4},
    { name: 'Tyger Campbell', team: 'UCLA', position: 'G', gp: 31, mpg: 31.5, ppg: 12.9, fgp: 38.5, ftp: 84, tpp: 34.4, rtr: 4},
    { name: 'Amari Bailey', team: 'UCLA', position: 'G', gp: 24, mpg: 25.3, ppg: 9.6, fgp: 47.3, ftp: 60, tpp: 35.9, rtr: 4},
    { name: 'David Singleton', team: 'UCLA', position: 'G', gp: 31, mpg: 27.2, ppg: 9.4, fgp: 44.4, ftp: 85, tpp: 43.4, rtr: 4},
    { name: 'Adem Bona', team: 'UCLA', position: 'F', gp: 30, mpg: 23, ppg: 7.8, fgp: 66.7, ftp: 59.7, tpp: 0, rtr: 4},
    { name: 'Dylan Andrews', team: 'UCLA', position: 'G', gp: 30, mpg: 10.3, ppg: 3.1, fgp: 44, ftp: 62.5, tpp: 28.1, rtr: 4},
    { name: 'Azuolas Tubelis', team: 'Arizona', position: 'F', gp: 31, mpg: 29.5, ppg: 19.9, fgp: 67.7, ftp: 76.6, tpp: 33.3, rtr: 12},
    { name: 'Oumar Ballo', team: 'Arizona', position: 'C', gp: 31, mpg: 27.6, ppg: 13.9, fgp: 64.5, ftp: 57.1, tpp: 0, rtr: 12},
    { name: 'Courtney Ramey', team: 'Arizona', position: 'G', gp: 28, mpg: 30.6, ppg: 10.8, fgp: 39.5, ftp: 52.8, tpp: 40.5, rtr: 12},
    { name: 'Kerr Kriisa', team: 'Arizona', position: 'G', gp: 31, mpg: 31.1, ppg: 10.7, fgp: 38.4, ftp: 78.9, tpp: 38.2, rtr: 12},
    { name: 'Pelle Larsson', team: 'Arizona', position: 'G', gp: 31, mpg: 27.5, ppg: 10.2, fgp: 46.7, ftp: 84.9, tpp: 32.9, rtr: 12},
    { name: 'Keyonte George', team: 'Baylor', position: 'G', gp: 30, mpg: 28.8, ppg: 16, fgp: 38.9, ftp: 79.4, tpp: 34.9, tpa: 209, rtr: 11},
    { name: 'Adam Flagler', team: 'Baylor', position: 'G', gp: 29, mpg: 33.5, ppg: 15.6, fgp: 42.3, ftp: 80, tpp: 41.1, tpa: 185, rtr: 11},
    { name: 'LJ Cryer', team: 'Baylor', position: 'G', gp: 28, mpg: 32.2, ppg: 14.6, fgp: 44.8, ftp: 90.3, tpp: 42.1, tpa: 171, rtr: 11},
    { name: 'Jalen Bridges', team: 'Baylor', position: 'F', gp: 31, mpg: 27, ppg: 9.7, fgp: 47.3, ftp: 77.2, tpp: 27.7, tpa: 101, rtr: 11},
    { name: 'Langston Love', team: 'Baylor', position: 'G', gp: 29, mpg: 17, ppg: 6.6, fgp: 43.2, ftp: 69.1, tpp: 36.4, tpa: 66, rtr: 11},
    { name: 'Jonathan Tchamwa Tchatchoua', team: 'Baylor', position: 'F', gp: 9, mpg: 20.8, ppg: 6.3, fgp: 51.3, ftp: 84.6, tpp: 50, tpa: 12, rtr: 11},
    { name: 'Flo Thamba', team: 'Baylor', position: 'F', gp: 31, mpg: 21.5, ppg: 5.2, fgp: 58.2, ftp: 63.9, tpp: 0, tpa: 0, rtr: 11},
    { name: 'Jalen Wilson', team: 'Kansas', position: 'F', gp: 31, mpg: 35.2, ppg: 19.7, fgp: 41.6, ftp: 78, tpp: 33.5, tpa: 182, rtr: 3},
    { name: 'Gradey Dick', team: 'Kansas', position: 'G', gp: 31, mpg: 32.5, ppg: 14.3, fgp: 44.2, ftp: 85.2, tpp: 40.6, tpa: 180, rtr: 3},
    { name: 'Kevin McCullar', team: 'Kansas', position: 'G', gp: 30, mpg: 31.4, ppg: 11.1, fgp: 43.5, ftp: 77.1, tpp: 28.6, tpa: 91, rtr: 3},
    { name: 'KJ Adams', team: 'Kansas', position: 'F', gp: 31, mpg: 27.1, ppg: 10.5, fgp: 62.6, ftp: 61.1, tpp: 0, tpa: 3, rtr: 3},
    { name: 'Dajuan Harris', team: 'Kansas', position: 'G', gp: 31, mpg: 34, ppg: 8.6, fgp: 46.6, ftp: 61.8, tpp: 43.1, tpa: 65, rtr: 3},
    { name: 'Joseph Yesufu', team: 'Kansas', position: 'G', gp: 30, mpg: 11.8, ppg: 3.7, fgp: 34.7, ftp: 76.9, tpp: 27.9, tpa: 68, rtr: 3},
    { name: 'Keyontae Johnson', team: 'Kansas State', position: 'F', gp: 31, mpg: 34.1, ppg: 17.8, fgp: 51.9, ftp: 72.5, tpp: 42.4, tpa: 99, rtr: 18},
    { name: 'Markquis Nowell', team: 'Kansas State', position: 'G', gp: 31, mpg: 36.5, ppg: 17, fgp: 37.6, ftp: 88.5, tpp: 35.6, tpa: 208, rtr: 18},
    { name: 'NaeQwan Tomlin', team: 'Kansas State', position: 'F', gp: 31, mpg: 26.9, ppg: 10.2, fgp: 48.6, ftp: 75, tpp: 27.1, tpa: 59, rtr: 18},
    { name: 'Desi Sills', team: 'Kansas State', position: 'G', gp: 30, mpg: 29.2, ppg: 8.5, fgp: 44, ftp: 74.7, tpp: 22.4, tpa: 67, rtr: 18},
    { name: 'David NGuessan', team: 'Kansas State', position: 'F', gp: 24, mpg: 20, ppg: 6.6, fgp: 70.3, ftp: 47.3, tpp: 57.1, tpa: 7, rtr: 18},
    { name: 'Cam Carter', team: 'Kansas State', position: 'G', gp: 31, mpg: 26.1, ppg: 6.5, fgp: 37.2, ftp: 72.2, tpp: 33.7, tpa: 92, rtr: 18},
    { name: 'Mike Miles', team: 'TCU', position: 'G', gp: 23, mpg: 31.3, ppg: 17.2, fgp: 50, ftp: 72.7, tpp: 32.5, tpa: 83, rtr: 16},
    { name: 'Damion Baugh', team: 'TCU', position: 'G', gp: 25, mpg: 35, ppg: 13, fgp: 44.1, ftp: 71.8, tpp: 29.7, tpa: 74, rtr: 16},
    { name: 'Emanuel Miller', team: 'TCU', position: 'F', gp: 28, mpg: 29.4, ppg: 12.8, fgp: 53.2, ftp: 66.1, tpp: 42.2, tpa: 45, rtr: 16},
    { name: 'JaKobe Coles', team: 'TCU', position: 'F', gp: 31, mpg: 16.5, ppg: 8.6, fgp: 48.5, ftp: 81, tpp: 32.3, tpa: 62, rtr: 16},
    { name: 'Micah Peavy', team: 'TCU', position: 'G', gp: 26, mpg: 21.2, ppg: 7.4, fgp: 38.9, ftp: 69.8, tpp: 25, tpa: 48, rtr: 16},
    { name: 'Chuck OBannon', team: 'TCU', position: 'F', gp: 31, mpg: 21.2, ppg: 6.9, fgp: 37.1, ftp: 73, tpp: 29.5, tpa: 105, rtr: 16},
    { name: 'Eddie Lampkin', team: 'TCU', position: 'C', gp: 24, mpg: 21.8, ppg: 6.3, fgp: 54.7, ftp: 55.8, tpp: 0, tpa: 0, rtr: 16},
    { name: 'Emanuel Miller', team: 'TCU', position: 'F', gp: 28, mpg: 29.4, ppg: 12.8, fgp: 53.2, ftp: 66.1, tpp: 42.2, tpa: 0, rtr: 16},
    { name: 'Marcus Carr', team: 'Texas', position: 'G', gp: 31, mpg: 33.2, ppg: 16.2, fgp: 43.7, ftp: 78.8, tpp: 36.5, tpa: 192, rtr: 9},
    { name: 'Sir Jabari Rice', team: 'Texas', position: 'G', gp: 31, mpg: 24.1, ppg: 12.6, fgp: 46.9, ftp: 87, tpp: 38.2, tpa: 131, rtr: 9},
    { name: 'Timmy Allen', team: 'Texas', position: 'F', gp: 31, mpg: 28.1, ppg: 10.5, fgp: 48.2, ftp: 69.3, tpp: 11.1, tpa: 18, rtr: 9},
    { name: 'Tyrese Hunter', team: 'Texas', position: 'G', gp: 31, mpg: 29.4, ppg: 10.5, fgp: 39.1, ftp: 79.4, tpp: 33.8, tpa: 136, rtr: 9},
    { name: 'Dylan Disu', team: 'Texas', position: 'F', gp: 30, mpg: 18.5, ppg: 7.6, fgp: 57.7, ftp: 75.6, tpp: 32.3, tpa: 31, rtr: 9},
    { name: 'Brock Cunningham', team: 'Texas', position: 'F', gp: 31, mpg: 18.2, ppg: 4.8, fgp: 49.5, ftp: 88.9, tpp: 42.6, tpa: 54, rtr: 9},
    { name: 'Zach Edey', team: 'Purdue', position: 'C', gp: 30, mpg: 31.5, ppg: 21.9, fgp: 61.1, ftp: 72.7, tpp: 0, tpa: 0, rtr: 7},
    { name: 'Fletcher Loyer', team: 'Purdue', position: 'G', gp: 31, mpg: 29.5, ppg: 11.6, fgp: 37.8, ftp: 81.4, tpp: 32.9, tpa: 164, rtr: 7},
    { name: 'Braden Smith', team: 'Purdue', position: 'G', gp: 31, mpg: 30.1, ppg: 10, fgp: 45.5, ftp: 87.5, tpp: 41.2, tpa: 85, rtr: 7},
    { name: 'Mason Gillis', team: 'Purdue', position: 'F', gp: 28, mpg: 19.1, ppg: 6.3, fgp: 44.5, ftp: 78.9, tpp: 36.8, tpa: 87, rtr: 7},
    { name: 'Brandon Newman', team: 'Purdue', position: 'G', gp: 31, mpg: 16.7, ppg: 6.1, fgp: 36.6, ftp: 74.5, tpp: 31.7, tpa: 104, rtr: 7},
    { name: 'Caleb Furst', team: 'Purdue', position: 'F', gp: 31, mpg: 19.3, ppg: 5.9, fgp: 51.8, ftp: 59.2, tpp: 30.6, tpa: 36, rtr: 7},
    { name: 'Trey Kaufman Renn', team: 'Purdue', position: 'F', gp: 31, mpg: 12, ppg: 4.9, fgp: 51.8, ftp: 64, tpp: 25, tpa: 20, rtr: 7},
    { name: 'Ethan Morton', team: 'Purdue', position: 'G', gp: 31, mpg: 26, ppg: 4, fgp: 33.3, ftp: 68.8, tpp: 28.9, tpa: 83, rtr: 7},
    { name: 'David Jenkins', team: 'Purdue', position: 'G', gp: 30, mpg: 14.6, ppg: 3.4, fgp: 34.3, ftp: 68.2, tpp: 30.3, tpa: 66, rtr: 7},
    { name: 'Boo Buie', team: 'Northwestern', position: 'G', gp: 31, mpg: 34.7, ppg: 17.2, fgp: 40.4, ftp: 87.6, tpp: 31.6, tpa: 187, rtr: 25},
    { name: 'Chase Audige', team: 'Northwestern', position: 'G', gp: 31, mpg: 34.3, ppg: 14.1, fgp: 37.3, ftp: 82.4, tpp: 33.2, tpa: 187, rtr: 25},
    { name: 'Ty Berry', team: 'Northwestern', position: 'G', gp: 31, mpg: 27.6, ppg: 8.6, fgp: 34.8, ftp: 82.1, tpp: 29.2, tpa: 154, rtr: 25},
    { name: 'Robbie Beran', team: 'Northwestern', position: 'F', gp: 31, mpg: 26.5, ppg: 7.7, fgp: 37.1, ftp: 83.9, tpp: 33.6, tpa: 107, rtr: 25},
    { name: 'Brooks Barnhizer', team: 'Northwestern', position: 'G', gp: 31, mpg: 23.3, ppg: 7.5, fgp: 43.2, ftp: 80.7, tpp: 33.3, tpa: 75, rtr: 25},
    { name: 'Matthew Nicholson', team: 'Northwestern', position: 'C', gp: 31, mpg: 20.8, ppg: 6.1, fgp: 59.1, ftp: 47, tpp: 0, tpa: 0, rtr: 25},
    { name: 'Julian Roper', team: 'Northwestern', position: 'G', gp: 15, mpg: 21.5, ppg: 4.4, fgp: 45.3, ftp: 45.5, tpp: 42.1, tpa: 19, rtr: 25},
    { name: 'Marcus Sasser', team: 'Houston', position: 'G', gp: 31, mpg: 31.7, ppg: 17.1, fgp: 43.1, ftp: 83.1, tpp: 38.2, tpa: 220, rtr: 1},
    { name: 'Jarace Walker', team: 'Houston', position: 'F', gp: 30, mpg: 26.8, ppg: 11.1, fgp: 47.9, ftp: 61.7, tpp: 35.8, tpa: 81, rtr: 1},
    { name: 'JWan Roberts', team: 'Houston', position: 'F', gp: 31, mpg: 25.6, ppg: 10.5, fgp: 64.9, ftp: 72.5, tpp: 0, tpa: 1, rtr: 1},
    { name: 'Tramon Mark', team: 'Houston', position: 'G', gp: 31, mpg: 28.7, ppg: 10, fgp: 40.8, ftp: 75.6, tpp: 36.7, tpa: 98, rtr: 1},
    { name: 'Jamal Shead', team: 'Houston', position: 'G', gp: 31, mpg: 32.3, ppg: 9.9, fgp: 42, ftp: 68.9, tpp: 32.8, tpa: 116, rtr: 1},
    { name: 'Emanuel Sharp', team: 'Houston', position: 'G', gp: 27, mpg: 15.1, ppg: 6, fgp: 37.8, ftp: 90.9, tpp: 35.6, tpa: 101, rtr: 1},
    { name: 'Javier Francis', team: 'Houston', position: 'F', gp: 31, mpg: 11.1, ppg: 4.8, fgp: 70.9, ftp: 60.5, tpp: 0, tpa: 0, rtr: 1},
    { name: 'Terrance Arceneaux', team: 'Houston', position: 'G', gp: 28, mpg: 13.4, ppg: 3.8, fgp: 39.4, ftp: 46.2, tpp: 25.9, tpa: 58, rtr: 1},
    { name: 'Kam Jones', team: 'Marquette', position: 'G', gp: 31, mpg: 29.6, ppg: 15.3, fgp: 47.1, ftp: 68, tpp: 36.7, tpa: 237, rtr: 10},
    { name: 'Tyler Kolek', team: 'Marquette', position: 'G', gp: 31, mpg: 32.4, ppg: 12.7, fgp: 48.8, ftp: 81.4, tpp: 39.6, tpa: 96, rtr: 10},
    { name: 'Olivier Prosper', team: 'Marquette', position: 'F', gp: 31, mpg: 28.4, ppg: 12.5, fgp: 52.2, ftp: 72.1, tpp: 34.4, tpa: 93, rtr: 10},
    { name: 'Oso Ighodaro', team: 'Marquette', position: 'F', gp: 31, mpg: 31.1, ppg: 11.9, fgp: 65.6, ftp: 54.3, tpp: 0, tpa: 0, rtr: 10},
    { name: 'David Joplin', team: 'Marquette', position: 'F', gp: 31, mpg: 19.1, ppg: 9.2, fgp: 42.1, ftp: 80.5, tpp: 38.4, tpa: 146, rtr: 10},
    { name: 'Stevie Mitchell', team: 'Marquette', position: 'G', gp: 31, mpg: 23.1, ppg: 7.2, fgp: 47.2, ftp: 71.4, tpp: 29.5, tpa: 61, rtr: 10},
    { name: 'Chase Ross', team: 'Marquette', position: 'G', gp: 31, mpg: 16.3, ppg: 4.9, fgp: 47, ftp: 78.8, tpp: 31.4, tpa: 51, rtr: 10},
    { name: 'Sean Jones', team: 'Marquette', position: 'G', gp: 28, mpg: 12.6, ppg: 4.1, fgp: 43.2, ftp: 63.6, tpp: 34.2, tpa: 38, rtr: 10},
    { name: 'Ben Gold', team: 'Marquette', position: 'F', gp: 31, mpg: 8.1, ppg: 3, fgp: 46.1, ftp: 69.2, tpp: 31.1, tpa: 45, rtr: 10},
    { name: 'Adam Sanogo', team: 'UConn', position: 'F', gp: 31, mpg: 26.5, ppg: 16.9, fgp: 58.6, ftp: 78.2, tpp: 36.2, tpa: 47, rtr: 14},
    { name: 'Jordan Hawkins', team: 'UConn', position: 'G', gp: 29, mpg: 29.7, ppg: 16.4, fgp: 40.7, ftp: 87.7, tpp: 37.8, tpa: 222, rtr: 14},
    { name: 'Tristen Newton', team: 'UConn', position: 'G', gp: 31, mpg: 28.7, ppg: 10.1, fgp: 38, ftp: 80.9, tpp: 35.1, tpa: 97, rtr: 14},
    { name: 'Alex Karaban', team: 'UConn', position: 'F', gp: 31, mpg: 28.9, ppg: 9.7, fgp: 47.1, ftp: 83.3, tpp: 39.7, tpa: 136, rtr: 14},
    { name: 'Donovan Clingan', team: 'UConn', position: 'C', gp: 31, mpg: 13.3, ppg: 7.3, fgp: 65.7, ftp: 51.3, tpp: 0, tpa: 1, rtr: 14},
    { name: 'Andre Jackson', team: 'UConn', position: 'G', gp: 28, mpg: 28.9, ppg: 6.8, fgp: 41.1, ftp: 69.8, tpp: 28.8, tpa: 73, rtr: 14},
    { name: 'Joey Calcaterra', team: 'UConn', position: 'G', gp: 30, mpg: 14.3, ppg: 5.7, fgp: 43.2, ftp: 86.4, tpp: 45.7, tpa: 81, rtr: 14},
    { name: 'Nahiem Alleyne', team: 'UConn', position: 'G', gp: 31, mpg: 17.8, ppg: 4.6, fgp: 34.2, ftp: 81.8, tpp: 36.2, tpa: 80, rtr: 14},
    { name: 'Hassan Diarra', team: 'UConn', position: 'G', gp: 28, mpg: 14.5, ppg: 2.7, fgp: 32.1, ftp: 51.4, tpp: 20.6, tpa: 34, rtr: 14},
    { name: 'Ryan Kalkbrenner', team: 'Creighton', position: 'C', gp: 28, mpg: 31.6, ppg: 15.1, fgp: 70.4, ftp: 76.8, tpp: 25, tpa: 16, rtr: 20},
    { name: 'Trey Alexander', team: 'Creighton', position: 'G', gp: 31, mpg: 31.5, ppg: 13.7, fgp: 46, ftp: 80.2, tpp: 43.2, tpa: 132, rtr: 20},
    { name: 'Baylor Scheierman', team: 'Creighton', position: 'G', gp: 31, mpg: 32.6, ppg: 12.7, fgp: 42.7, ftp: 80.7, tpp: 36.6, tpa: 202, rtr: 20},
    { name: 'Ryan Nembhard', team: 'Creighton', position: 'G', gp: 31, mpg: 33.8, ppg: 12, fgp: 43.5, ftp: 85.3, tpp: 36, tpa: 125, rtr: 20},
    { name: 'Arthur Kaluma', team: 'Creighton', position: 'F', gp: 31, mpg: 29.1, ppg: 11.9, fgp: 41.3, ftp: 71.9, tpp: 32.1, tpa: 112, rtr: 20},
    { name: 'Frederick King', team: 'Creighton', position: 'C', gp: 31, mpg: 9.3, ppg: 4, fgp: 61.2, ftp: 62.5, tpp: 0, tpa: 0, rtr: 20},
    { name: 'Francisco Farabello', team: 'Creighton', position: 'G', gp: 28, mpg: 15.5, ppg: 3, fgp: 31.3, ftp: 50, tpp: 28.2, tpa: 78, rtr: 20},
    { name: 'Mason Miller', team: 'Creighton', position: 'F', gp: 31, mpg: 9.5, ppg: 2.5, fgp: 38.5, ftp: 56.3, tpp: 38.8, tpa: 49, rtr: 20},
    { name: 'Shereef Mitchell', team: 'Creighton', position: 'G', gp: 30, mpg: 8.1, ppg: 2, fgp: 43.1, ftp: 63.6, tpp: 33.3, tpa: 27, rtr: 20},
    { name: 'Souley Boum', team: 'Xavier', position: 'G', gp: 31, mpg: 35.3, ppg: 16.8, fgp: 46.4, ftp: 86.5, tpp: 42.2, tpa: 161, rtr: 23},
    { name: 'Colby Jones', team: 'Xavier', position: 'G', gp: 30, mpg: 33.6, ppg: 15.3, fgp: 52.6, ftp: 68.8, tpp: 40.2, tpa: 102, rtr: 23},
    { name: 'Souley Boum', team: 'Xavier', position: 'G', gp: 31, mpg: 35.3, ppg: 16.8, fgp: 46.4, ftp: 86.5, tpp: 42.2, tpa: 22, rtr: 23},
    { name: 'Zach Freemantle', team: 'Xavier', position: 'F', gp: 22, mpg: 28.5, ppg: 15.2, fgp: 58.5, ftp: 65.3, tpp: 63.6, tpa: 85, rtr: 23},
    { name: 'Jack Nunge', team: 'Xavier', position: 'F', gp: 31, mpg: 29.2, ppg: 14, fgp: 52.5, ftp: 68.6, tpp: 41.2, tpa: 129, rtr: 23},
    { name: 'Adam Kunkel', team: 'Xavier', position: 'G', gp: 29, mpg: 29.4, ppg: 10.3, fgp: 45, ftp: 87.9, tpp: 39.5, tpa: 7, rtr: 23},
    { name: 'Jerome Hunter', team: 'Xavier', position: 'F', gp: 31, mpg: 19.5, ppg: 7.3, fgp: 58.1, ftp: 68.2, tpp: 14.3, tpa: 31, rtr: 23},
    { name: 'Desmond Claude', team: 'Xavier', position: 'G', gp: 29, mpg: 19.9, ppg: 4.2, fgp: 41.4, ftp: 57.7, tpp: 35.5, tpa: 17, rtr: 23},
    { name: 'Souley Boum', team: 'Xavier', position: 'G', gp: 31, mpg: 35.3, ppg: 16.8, fgp: 46.4, ftp: 86.5, tpp: 42.2, tpa: 2, rtr: 23},
    { name: 'Brandon Miller', team: 'Alabama', position: 'F', gp: 31, mpg: 33.5, ppg: 19.6, fgp: 45.3, ftp: 85, tpp: 40.4, tpa: 228, rtr: 2},
    { name: 'Mark Sears', team: 'Alabama', position: 'G', gp: 31, mpg: 30.4, ppg: 13.3, fgp: 42.7, ftp: 82.9, tpp: 37.7, tpa: 167, rtr: 2},
    { name: 'Noah Clowney', team: 'Alabama', position: 'F', gp: 30, mpg: 26, ppg: 10, fgp: 48.8, ftp: 64.4, tpp: 26.5, tpa: 98, rtr: 2},
    { name: 'Jahvon Quinerly', team: 'Alabama', position: 'G', gp: 29, mpg: 19.4, ppg: 7.8, fgp: 39.2, ftp: 84.6, tpp: 34.3, tpa: 99, rtr: 2},
    { name: 'Jaden Bradley', team: 'Alabama', position: 'G', gp: 31, mpg: 21.2, ppg: 7.3, fgp: 40.9, ftp: 69, tpp: 31.8, tpa: 22, rtr: 2},
    { name: 'Rylan Griffen', team: 'Alabama', position: 'G', gp: 31, mpg: 15.9, ppg: 6.4, fgp: 39.4, ftp: 74.4, tpp: 32.2, tpa: 115, rtr: 2},
    { name: 'Nimari Burnett', team: 'Alabama', position: 'G', gp: 22, mpg: 15.6, ppg: 5.9, fgp: 37, ftp: 75, tpp: 31.1, tpa: 74, rtr: 2},
    { name: 'Charles Bediako', team: 'Alabama', position: 'C', gp: 31, mpg: 20.4, ppg: 5.7, fgp: 63.2, ftp: 39.1, tpp: 0, tpa: 6, rtr: 2},
    { name: 'Noah Gurley', team: 'Alabama', position: 'F', gp: 28, mpg: 14.8, ppg: 4.8, fgp: 44.5, ftp: 75, tpp: 27.4, tpa: 62, rtr: 2},
    { name: 'Wade Taylor', team: 'Texas AM', position: 'G', gp: 31, mpg: 28.4, ppg: 16.3, fgp: 40.5, ftp: 86.9, tpp: 36.5, tpa: 197, rtr: 25},
    { name: 'Tyrece Radford', team: 'Texas AM', position: 'G', gp: 31, mpg: 30.9, ppg: 13.3, fgp: 39.2, ftp: 80.2, tpp: 32.2, tpa: 115, rtr: 25},
    { name: 'Henry Coleman', team: 'Texas AM', position: 'F', gp: 31, mpg: 26.9, ppg: 9.4, fgp: 53.5, ftp: 72.5, tpp: 0, tpa: 2, rtr: 25},
    { name: 'Julius Marble', team: 'Texas AM', position: 'F', gp: 31, mpg: 21.2, ppg: 9.3, fgp: 53.3, ftp: 57, tpp: 0, tpa: 7, rtr: 25},
    { name: 'Dexter Dennis', team: 'Texas AM', position: 'G', gp: 30, mpg: 28.3, ppg: 9, fgp: 38.7, ftp: 79.7, tpp: 30, tpa: 120, rtr: 25},
    { name: 'Manny Obaseki', team: 'Texas AM', position: 'G', gp: 16, mpg: 15.7, ppg: 6.3, fgp: 44.9, ftp: 78.1, tpp: 38.5, tpa: 13, rtr: 25},
    { name: 'Hayden Hefner', team: 'Texas AM', position: 'G', gp: 28, mpg: 11.5, ppg: 3.6, fgp: 39.3, ftp: 79.2, tpp: 31.4, tpa: 51, rtr: 25},
    { name: 'Andersson Garcia', team: 'Texas AM', position: 'F', gp: 30, mpg: 16.3, ppg: 3.3, fgp: 51.7, ftp: 73.5, tpp: 33.3, tpa: 6, rtr: 25},
    { name: 'Santiago Vescovi', team: 'Tennessee', position: 'G', gp: 28, mpg: 32.8, ppg: 12.7, fgp: 40.2, ftp: 74.6, tpp: 36.1, tpa: 208, rtr: 17},
    { name: 'Olivier Nkamhoua', team: 'Tennessee', position: 'F', gp: 31, mpg: 25.6, ppg: 10.6, fgp: 51.9, ftp: 69.1, tpp: 30, tpa: 40, rtr: 17},
    { name: 'Josiah Jordan James', team: 'Tennessee', position: 'G', gp: 19, mpg: 24.1, ppg: 10.1, fgp: 38.9, ftp: 88.5, tpp: 32.3, tpa: 99, rtr: 17},
    { name: 'Julian Phillips', team: 'Tennessee', position: 'F', gp: 27, mpg: 24.9, ppg: 9, fgp: 41.5, ftp: 82, tpp: 25, tpa: 40, rtr: 17},
    { name: 'Tyreke Key', team: 'Tennessee', position: 'G', gp: 28, mpg: 24, ppg: 8.3, fgp: 33.7, ftp: 75, tpp: 34.2, tpa: 120, rtr: 17},
    { name: 'Uros Plavsic', team: 'Tennessee', position: 'F', gp: 29, mpg: 13.3, ppg: 5.1, fgp: 66, ftp: 34.7, tpp: 0, tpa: 0, rtr: 17},
    { name: 'Jonas Aidoo', team: 'Tennessee', position: 'F', gp: 30, mpg: 18.2, ppg: 5, fgp: 49.2, ftp: 73.9, tpp: 29.4, tpa: 17, rtr: 17},
    { name: 'Jahmai Mashack', team: 'Tennessee', position: 'G', gp: 31, mpg: 17, ppg: 4.2, fgp: 40, ftp: 57.9, tpp: 30, tpa: 38, rtr: 17},
    { name: 'Oscar Tshiebwe', team: 'Kentucky', position: 'F', gp: 29, mpg: 33.2, ppg: 16.4, fgp: 56.4, ftp: 72.8, tpp: 0, tpa: 2, rtr: 15},
    { name: 'Antonio Reeves', team: 'Kentucky', position: 'G', gp: 31, mpg: 27.3, ppg: 14.2, fgp: 43, ftp: 80.5, tpp: 41, tpa: 173, rtr: 15},
    { name: 'Jacob Toppin', team: 'Kentucky', position: 'F', gp: 30, mpg: 31.2, ppg: 12.3, fgp: 46.9, ftp: 65.3, tpp: 33.3, tpa: 48, rtr: 15},
    { name: 'Cason Wallace', team: 'Kentucky', position: 'G', gp: 29, mpg: 31.6, ppg: 11.7, fgp: 44.6, ftp: 76.2, tpp: 35.6, tpa: 118, rtr: 15},
    { name: 'Sahvir Wheeler', team: 'Kentucky', position: 'G', gp: 21, mpg: 28.5, ppg: 7.7, fgp: 41.7, ftp: 53.3, tpp: 36.6, tpa: 41, rtr: 15},
    { name: 'CJ Fredrick', team: 'Kentucky', position: 'G', gp: 24, mpg: 23.3, ppg: 6.7, fgp: 35.8, ftp: 91.7, tpp: 32.4, tpa: 102, rtr: 15},
    { name: 'Chris Livingston', team: 'Kentucky', position: 'F', gp: 31, mpg: 21.2, ppg: 6.3, fgp: 44.2, ftp: 75, tpp: 33.3, tpa: 51, rtr: 15},
    { name: 'Isaiah Wong', team: 'Miami', position: 'G', gp: 30, mpg: 33.3, ppg: 15.9, fgp: 44.2, ftp: 82.9, tpp: 38.1, tpa: 134, rtr: 5},
    { name: 'Jordan Miller', team: 'Miami', position: 'G', gp: 30, mpg: 34.4, ppg: 15.1, fgp: 54, ftp: 80, tpp: 35.4, tpa: 79, rtr: 5},
    { name: 'Norchad Omier', team: 'Miami', position: 'F', gp: 30, mpg: 29.5, ppg: 14.1, fgp: 59, ftp: 71.2, tpp: 33.3, tpa: 15, rtr: 5},
    { name: 'Nijel Pack', team: 'Miami', position: 'G', gp: 28, mpg: 31.3, ppg: 13.4, fgp: 43.6, ftp: 87.2, tpp: 40.6, tpa: 170, rtr: 5},
    { name: 'Wooga Poplar', team: 'Miami', position: 'G', gp: 30, mpg: 22.9, ppg: 8.2, fgp: 47.9, ftp: 88.9, tpp: 41.6, tpa: 77, rtr: 5},
    { name: 'Bensley Joseph', team: 'Miami', position: 'G', gp: 30, mpg: 20.7, ppg: 5.3, fgp: 41.9, ftp: 76.5, tpp: 37.8, tpa: 74, rtr: 5},
    { name: 'Harlond Beverly', team: 'Miami', position: 'G', gp: 30, mpg: 12.6, ppg: 3.9, fgp: 48.2, ftp: 80, tpp: 29.4, tpa: 34, rtr: 5},
    { name: 'Anthony Walker', team: 'Miami', position: 'F', gp: 30, mpg: 9.7, ppg: 2.9, fgp: 45.1, ftp: 64.7, tpp: 11.1, tpa: 18, rtr: 5},
    { name: 'Matt Bradley', team: 'San Diego State', position: 'G', gp: 31, mpg: 26.6, ppg: 13, fgp: 41.4, ftp: 80.5, tpp: 37.7, tpa: 130, rtr: 26},
    { name: 'Darrion Trammell', team: 'San Diego State', position: 'G', gp: 30, mpg: 27.2, ppg: 9.5, fgp: 34.9, ftp: 74.7, tpp: 30.4, tpa: 125, rtr: 26},
    { name: 'Lamont Butler', team: 'San Diego State', position: 'G', gp: 31, mpg: 25.5, ppg: 8.7, fgp: 40.6, ftp: 73.2, tpp: 33.3, tpa: 96, rtr: 26},
    { name: 'Jaedon LeDee', team: 'San Diego State', position: 'F', gp: 31, mpg: 18, ppg: 8, fgp: 50.6, ftp: 76.7, tpp: 0, tpa: 9, rtr: 26},
    { name: 'Micah Parrish', team: 'San Diego State', position: 'G', gp: 31, mpg: 21.6, ppg: 7.7, fgp: 41.8, ftp: 76.8, tpp: 40.2, tpa: 102, rtr: 26},
    { name: 'Keshad Johnson', team: 'San Diego State', position: 'F', gp: 31, mpg: 21.9, ppg: 7.6, fgp: 54.1, ftp: 61.4, tpp: 23.7, tpa: 38, rtr: 26},
    { name: 'Adam Seiko', team: 'San Diego State', position: 'G', gp: 29, mpg: 20.6, ppg: 6.7, fgp: 48.4, ftp: 79.2, tpp: 49, tpa: 104, rtr: 26},
    { name: 'Tyson Degenhart', team: 'Boise State', position: 'F', gp: 32, mpg: 34.2, ppg: 14.4, fgp: 53.2, ftp: 71.1, tpp: 33, tpa: 112, rtr: 30},
    { name: 'Max Rice', team: 'Boise State', position: 'G', gp: 32, mpg: 34.2, ppg: 14.3, fgp: 44.8, ftp: 86.3, tpp: 41.8, tpa: 170, rtr: 30},
    { name: 'Marcus Shaver', team: 'Boise State', position: 'G', gp: 27, mpg: 32.7, ppg: 13.4, fgp: 38.1, ftp: 74.1, tpp: 27.6, tpa: 105, rtr: 30},
    { name: 'Chibuzo Agbo', team: 'Boise State', position: 'G', gp: 32, mpg: 29.4, ppg: 11.6, fgp: 40.3, ftp: 81.9, tpp: 41.7, tpa: 151, rtr: 30},
    { name: 'Naje Smith', team: 'Boise State', position: 'F', gp: 32, mpg: 28, ppg: 10, fgp: 52.2, ftp: 69, tpp: 36.7, tpa: 60, rtr: 30},
    { name: 'Drew Timme', team: 'Gonzaga', position: 'F', gp: 33, mpg: 31.4, ppg: 20.9, fgp: 62.4, ftp: 63.6, tpp: 9.1, tpa: 22, rtr: 9},
    { name: 'Julian Strawther', team: 'Gonzaga', position: 'G', gp: 33, mpg: 30.7, ppg: 15.1, fgp: 48.3, ftp: 78.1, tpp: 42.6, tpa: 169, rtr: 9},
    { name: 'Anton Watson', team: 'Gonzaga', position: 'F', gp: 33, mpg: 28.6, ppg: 11.3, fgp: 61.4, ftp: 57.3, tpp: 31.7, tpa: 41, rtr: 9},
    { name: 'Rasir Bolton', team: 'Gonzaga', position: 'G', gp: 33, mpg: 26.3, ppg: 10.4, fgp: 44.5, ftp: 80.3, tpp: 39.7, tpa: 116, rtr: 9},
    { name: 'Malachi Smith', team: 'Gonzaga', position: 'G', gp: 33, mpg: 21, ppg: 8.7, fgp: 53.3, ftp: 81, tpp: 49.4, tpa: 81, rtr: 9},
    { name: 'Nolan Hickman', team: 'Gonzaga', position: 'G', gp: 33, mpg: 28.2, ppg: 8.4, fgp: 44.1, ftp: 80, tpp: 38.3, tpa: 120, rtr: 9},
    { name: 'Ben Gregg', team: 'Gonzaga', position: 'F', gp: 32, mpg: 12.1, ppg: 5.5, fgp: 52.1, ftp: 78.4, tpp: 39.3, tpa: 56, rtr: 9},
    { name: 'Trayce Jackson Davis', team: 'Indiana', position: 'F', gp: 28, mpg: 34.2, ppg: 20.5, fgp: 56.9, ftp: 69.1, tpp: 0, tpa: 0, rtr: 13},
    { name: 'Jalen Hood Schifino', team: 'Indiana', position: 'G', gp: 28, mpg: 32.6, ppg: 13.4, fgp: 42.1, ftp: 78.3, tpp: 36.3, tpa: 91, rtr: 13},
    { name: 'Xavier Johnson', team: 'Indiana', position: 'G', gp: 11, mpg: 25.1, ppg: 9.9, fgp: 41.5, ftp: 79.5, tpp: 37, tpa: 27, rtr: 13},
    { name: 'Race Thompson', team: 'Indiana', position: 'F', gp: 26, mpg: 22.8, ppg: 7.9, fgp: 48.1, ftp: 68.3, tpp: 24.3, tpa: 37, rtr: 13},
    { name: 'Miller Kopp', team: 'Indiana', position: 'F', gp: 31, mpg: 29.6, ppg: 7.9, fgp: 48.9, ftp: 83.3, tpp: 45.2, tpa: 124, rtr: 13},
    { name: 'Trey Galloway', team: 'Indiana', position: 'G', gp: 28, mpg: 27.5, ppg: 7.2, fgp: 49.3, ftp: 70.7, tpp: 47.5, tpa: 59, rtr: 13},
    { name: 'Malik Reneau', team: 'Indiana', position: 'F', gp: 31, mpg: 15.1, ppg: 6.4, fgp: 55.9, ftp: 70.2, tpp: 25, tpa: 8, rtr: 13},
    { name: 'Tamar Bates', team: 'Indiana', position: 'G', gp: 31, mpg: 20.4, ppg: 6.3, fgp: 41, ftp: 96.2, tpp: 39.5, tpa: 86, rtr: 13},
    { name: 'Logan Johnson', team: 'Saint Marys', position: 'G', gp: 33, mpg: 34.4, ppg: 14.7, fgp: 46, ftp: 67.8, tpp: 30.6, tpa: 111, rtr: 27},
    { name: 'Aidan Mahaney', team: 'Saint Marys', position: 'G', gp: 33, mpg: 30.8, ppg: 14.5, fgp: 43.7, ftp: 73.9, tpp: 41.2, tpa: 177, rtr: 27},
    { name: 'Alex Ducas', team: 'Saint Marys', position: 'G', gp: 33, mpg: 31.5, ppg: 12.5, fgp: 43.1, ftp: 86.9, tpp: 41.8, tpa: 201, rtr: 27},
    { name: 'Mitchell Saxen', team: 'Saint Marys', position: 'C', gp: 33, mpg: 31.2, ppg: 11.6, fgp: 54.6, ftp: 63.2, tpp: 0, tpa: 1, rtr: 27},
    { name: 'Augustas Marciulionis', team: 'Saint Marys', position: 'G', gp: 33, mpg: 15.2, ppg: 5.6, fgp: 40.4, ftp: 75, tpp: 24.6, tpa: 57, rtr: 27},
    { name: 'Kyle Bowen', team: 'Saint Marys', position: 'F', gp: 33, mpg: 33.3, ppg: 5.3, fgp: 42.8, ftp: 58.1, tpp: 39.5, tpa: 81, rtr: 27},
    { name: 'Kyle Filipowski', team: 'Duke', position: 'C', gp: 32, mpg: 28.7, ppg: 15.2, fgp: 43.4, ftp: 78, tpp: 29.7, tpa: 111, rtr: 19},
    { name: 'Jeremy Roach', team: 'Duke', position: 'G', gp: 28, mpg: 32.6, ppg: 13, fgp: 41.7, ftp: 74, tpp: 33.1, tpa: 118, rtr: 19},
    { name: 'Tyrese Proctor', team: 'Duke', position: 'G', gp: 32, mpg: 28.9, ppg: 9.2, fgp: 37.9, ftp: 85.7, tpp: 31.3, tpa: 131, rtr: 19},
    { name: 'Mark Mitchell', team: 'Duke', position: 'F', gp: 32, mpg: 26.8, ppg: 9.2, fgp: 48.2, ftp: 77.1, tpp: 36.7, tpa: 49, rtr: 19},
    { name: 'Dariq Whitehead', team: 'Duke', position: 'F', gp: 24, mpg: 20.4, ppg: 8, fgp: 40.7, ftp: 85, tpp: 41.2, tpa: 85, rtr: 19},
    { name: 'Ryan Young', team: 'Duke', position: 'C', gp: 32, mpg: 19, ppg: 6.9, fgp: 69, ftp: 80, tpp: 0, tpa: 0, rtr: 19},
    { name: 'Dereck Lively', team: 'Duke', position: 'C', gp: 30, mpg: 19.1, ppg: 5.4, fgp: 65.1, ftp: 63.6, tpp: 15.4, tpa: 13, rtr: 19},
    { name: 'Jacob Grandison', team: 'Duke', position: 'G', gp: 32, mpg: 16.4, ppg: 4.7, fgp: 40, ftp: 93.8, tpp: 33.7, tpa: 92, rtr: 19},
    { name: 'Armaan Franklin', team: 'Virginia', position: 'G', gp: 30, mpg: 29.7, ppg: 12.6, fgp: 42.7, ftp: 72.4, tpp: 38.1, tpa: 155, rtr: 29},
    { name: 'Jayden Gardner', team: 'Virginia', position: 'F', gp: 30, mpg: 25.9, ppg: 11.9, fgp: 51.2, ftp: 68.6, tpp: 0, tpa: 2, rtr: 29},
    { name: 'Kihei Clark', team: 'Virginia', position: 'G', gp: 30, mpg: 33.2, ppg: 11, fgp: 41, ftp: 76, tpp: 36.2, tpa: 94, rtr: 29},
    { name: 'Reece Beekman', team: 'Virginia', position: 'G', gp: 29, mpg: 32.3, ppg: 9.4, fgp: 40.6, ftp: 78.2, tpp: 37.5, tpa: 72, rtr: 29},
    { name: 'Ben Vander Plas', team: 'Virginia', position: 'F', gp: 29, mpg: 24.8, ppg: 7.4, fgp: 41.2, ftp: 50.9, tpp: 30.3, tpa: 109, rtr: 29},
    { name: 'Isaac McKneely', team: 'Virginia', position: 'G', gp: 30, mpg: 21.5, ppg: 6.6, fgp: 41.7, ftp: 71.4, tpp: 39.7, tpa: 116, rtr: 29},
    { name: 'Kadin Shedrick', team: 'Virginia', position: 'F', gp: 27, mpg: 17.1, ppg: 5.9, fgp: 66.3, ftp: 78.6, tpp: 25, tpa: 4, rtr: 29},
    { name: 'Kobe Brown', team: 'Missouri', position: 'G', gp: 30, mpg: 28.9, ppg: 15.9, fgp: 55.2, ftp: 80.3, tpp: 45.3, tpa: 95, rtr: 28},
    { name: 'DMoi Hodge', team: 'Missouri', position: 'G', gp: 31, mpg: 28.5, ppg: 14.3, fgp: 46.9, ftp: 70.6, tpp: 39.6, tpa: 222, rtr: 28},
    { name: 'DeAndre Gholston', team: 'Missouri', position: 'G', gp: 31, mpg: 22.3, ppg: 10.5, fgp: 43.4, ftp: 78, tpp: 33.7, tpa: 86, rtr: 28},
    { name: 'Isiaih Mosley', team: 'Missouri', position: 'G', gp: 14, mpg: 19.9, ppg: 9.6, fgp: 46.3, ftp: 75, tpp: 30.6, tpa: 49, rtr: 28},
    { name: 'Noah Carter', team: 'Missouri', position: 'F', gp: 30, mpg: 20.9, ppg: 9.5, fgp: 48.8, ftp: 72.3, tpp: 31.1, tpa: 103, rtr: 28},
    { name: 'Nick Honor', team: 'Missouri', position: 'G', gp: 31, mpg: 29.7, ppg: 8.2, fgp: 41.9, ftp: 90, tpp: 40.5, tpa: 121, rtr: 28},
    { name: 'Sean East', team: 'Missouri', position: 'G', gp: 31, mpg: 23.2, ppg: 7.6, fgp: 46.3, ftp: 83.6, tpp: 24.2, tpa: 62, rtr: 28},
    { name: 'Ricky Council', team: 'Arkansas', position: 'G', gp: 32, mpg: 34.3, ppg: 16.3, fgp: 45.1, ftp: 77.5, tpp: 27.9, tpa: 111, rtr: 27},
    { name: 'Nick Smith', team: 'Arkansas', position: 'G', gp: 13, mpg: 25.4, ppg: 13.8, fgp: 40.3, ftp: 76.2, tpp: 34.5, tpa: 58, rtr: 27},
    { name: 'Anthony Black', team: 'Arkansas', position: 'G', gp: 32, mpg: 34.7, ppg: 13, fgp: 46.7, ftp: 70.1, tpp: 31.3, tpa: 83, rtr: 27},
    { name: 'Trevon Brazile', team: 'Arkansas', position: 'F', gp: 9, mpg: 27.1, ppg: 11.8, fgp: 48.1, ftp: 67.7, tpp: 37.9, tpa: 29, rtr: 27},
    { name: 'Davonte Davis', team: 'Arkansas', position: 'G', gp: 31, mpg: 33.3, ppg: 10.7, fgp: 41.5, ftp: 71.4, tpp: 35, tpa: 120, rtr: 27},
    { name: 'Jordan Walsh', team: 'Arkansas', position: 'G', gp: 32, mpg: 24.2, ppg: 7.2, fgp: 44.3, ftp: 71.4, tpp: 27.3, tpa: 66, rtr: 27},
    { name: 'Makhi Mitchell', team: 'Arkansas', position: 'F', gp: 32, mpg: 20, ppg: 6.9, fgp: 65.2, ftp: 66.1, tpp: 0, tpa: 1, rtr: 27},
];

const rtrTable = document.querySelector('table');

const rtrSort = document.getElementById("idRTR");
rtrSort.addEventListener('click', orderRTR);

var RTRlist = playersRTR.sort(function (x, y) {
    return x.rtr - y.rtr;
 }); 

function orderRTR(RTRlist) {
    playersRTR.forEach(element => {
        let player = document.createElement('tr');
        let playerName = document.createElement('td');
        let playerTeam = document.createElement('td');
        let playerPosition = document.createElement('td');
        let playerGP = document.createElement('td');
        let playerMPG = document.createElement('td');
        let playerPPG = document.createElement('td');
        let playerFGP = document.createElement('td');
        let playerFTP = document.createElement('td');
        let playerTPP = document.createElement('td');
        let playerTPA = document.createElement('td');
        let playerRTR = document.createElement('td');

        playerName.innerText = element.name;
        playerTeam.innerText = element.team;
        playerPosition.innerText = element.position;
        playerGP.innerText = element.gp;
        playerMPG.innerText = element.mpg;
        playerPPG.innerText = element.ppg;
        playerFGP.innerText = element.fgp;
        playerFTP.innerText = element.ftp;
        playerTPP.innerText = element.tpp;
        playerTPA.innerText = element.tpp;
        playerRTR.innerText = element.rtr;
        

        playerTable.appendChild(player);
        player.appendChild(playerName);
        player.appendChild(playerTeam);
        player.appendChild(playerPosition);
        player.appendChild(playerGP);
        player.appendChild(playerMPG);
        player.appendChild(playerPPG);
        player.appendChild(playerFGP);
        player.appendChild(playerFTP);
        player.appendChild(playerTPP);
        player.appendChild(playerTPA);
        player.appendChild(playerRTR);
    });
}