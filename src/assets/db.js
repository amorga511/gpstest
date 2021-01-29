
var db = openDatabase('db_dms_forms', '1.0', 'DB for DMS App Forms', 30 * 1024 * 1024);

db.transaction(function(cmd){
    
    var vFlag = 0;
    cmd.executeSql('CREATE TABLE IF NOT EXISTS users (id unique, pwd, name, phone, email, job_title, status, login, type, id_dms, license, id_pdv_dlr ,horus_completo)');

     
    db.transaction(function(cmd){   
        cmd.executeSql('SELECT * FROM users where id =?', ['admin'], function (cmd, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
                //alert(results.rows.item(i).id);
                vFlag = 1;
            }
            if(vFlag == 0){
                cmd.executeSql('INSERT INTO users (id, pwd, name, phone, email, job_title, status,login,type, id_dms, license) VALUES (?,?,?,?,?,?,?,?,?,?,?)', ['admin','admin123', 'Administrador', '99999999','NA', 'NA', 1,0,'admin', 9, 99999999]); 
            }
        //cmd.executeSql('INSERT INTO kpi_data_zonas_hist (id,zona, cnl, sub_cnl, ejecutado,forecast,budget,fecha,year,month,unit) VALUES (?,?,?,?,?,?,?,?,?,?,?)', ['1101','0', '1', '1','152325','15262','15626','20170502','2017','5','UND']);
        });
    });

});