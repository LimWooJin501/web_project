package util;

import java.sql.Connection;
import java.sql.SQLException;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class ConnectionPool {

    private static DataSource _ds = null;

    static {
        try {
            _ds = (DataSource) new InitialContext().lookup("java:comp/env/jdbc/finaldb");
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }

    public static Connection get() throws NamingException, SQLException {
        return _ds.getConnection();
    }

    public static DataSource getDataSource() {
        return _ds;
    }
}