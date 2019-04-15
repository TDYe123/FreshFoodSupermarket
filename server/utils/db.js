const mysql = require('mysql'),
	    pool  = mysql.createPool({
	        'host': 'localhost',
	        'port': '3306',
	        'user': 'root',
	        'password': '158728',
	        'database': 'freshfood',
	    });

async function db(sql) {
	return new Promise((resolve, reject)=> {
		pool.getConnection((err, connection)=> {
			if(err) {
				console.error(err)
			}
			connection.query(sql, (err, result)=> {
				connection.release()
				resolve(result)
			})
		})
	}) 	
}

// async function db(sql) {
// 	var data = await pool.getConnection((err, connection)=> {
// 		if(err) {
// 			console.error(err)
// 			return
// 		} else {
// 			connection.query(sql, (err, result)=> {
// 				connection.release()
// 				if(err) {
// 					console.error(err)
// 				} else {
// 					return result
// 				}
// 			})
// 		}
// 	})
// 	console.log(data);
// 	return data
// }

module.exports = db





    