import sqlite3 as sql

with sql.connect('database.db') as conn :
    con=conn.cursor()
    try:
        con.execute("SELECT name FROM sqlite_master WHERE type='table';")
        print(con.fetchall())
        print("Done")
    except Exception as e:
        print("Error")
