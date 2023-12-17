package dao;
import java.sql.*;
import javax.naming.NamingException;
import util.ConnectionPool;

public class UserDao{

	public boolean insert(String uid, String upw, String uname) throws NamingException, SQLException
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		try
		{
			String sql = "insert into login(id,pw,name) values(?,?,?)";
			conn = ConnectionPool.get();
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, uid);
			stmt.setString(2, upw);
			stmt.setString(3, uname);
			
			int count = stmt.executeUpdate();
			return (count > 0)? true:false;
		}
		finally
		{
			if(stmt!=null) stmt.close();
			if(conn!=null) conn.close();
		}
	}
	
	public boolean exists(String uid) throws NamingException, SQLException
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;
		try
		{
			String sql = "SELECT id FROM login WHERE id = ?";
			conn = ConnectionPool.get();
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, uid);
			
			rs = stmt.executeQuery();
			return rs.next();
			}
		finally
		{
			if(rs!=null) rs.close();
			if(stmt!=null) stmt.close();
			if(conn!=null) conn.close();
		}
	}
	
	public boolean delete(String uid, String upw, String uname) throws NamingException, SQLException
	{
		Connection conn = null;
		PreparedStatement stmt = null;
		try
		{
			String sql = "DELETE FROM login WHERE id = ? AND pw = ? AND name = ?";
			conn = ConnectionPool.get();
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, uid);
			stmt.setString(2, upw);
			stmt.setString(3, uname);
			
			int count = stmt.executeUpdate();
			return (count >0)? true:false;
			}
		finally
		{
			if(stmt!=null) stmt.close();
			if(conn!=null) conn.close();
		}
	}
	public boolean authenticate(String uid, String upw) throws NamingException, SQLException {
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;

		try 
		{
			String sql = "SELECT * FROM login WHERE id = ? AND pw = ?";
			conn = ConnectionPool.get();
			stmt = conn.prepareStatement(sql);
			stmt.setString(1, uid);
			stmt.setString(2, upw);

			rs = stmt.executeQuery();
			return rs.next();
			} 
		finally 
		{
			try {
				if(rs!=null) rs.close();
				if(stmt!=null) stmt.close();
				if(conn!=null) conn.close();
				}
			catch (SQLException e) {
			e.printStackTrace();
			}
		}
	}
}