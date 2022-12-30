using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace BL
{
    public class CustomerManager
    {
        private static readonly execlenceTaskEntities db = DB.Instance;
       
        public static Customer AddCustomer(CustomerDTO customer)
        {
            //SqlConnection sqlCon = null;
            //String SqlconString = ConfigurationManager.ConnectionStrings["execlenceTaskEntities"].ConnectionString;

            //using (sqlCon = new SqlConnection(SqlconString))
            //{
            //    sqlCon.Open();
            //    SqlCommand sql_cmnd = new SqlCommand("ADD_CUSTOMER", sqlCon);
            //    sql_cmnd.CommandType = CommandType.StoredProcedure;
            //    sql_cmnd.Parameters.AddWithValue("@ID", SqlDbType.VarChar).Value = customer.Id;
            //    sql_cmnd.Parameters.AddWithValue("@HEBREW_NAME", SqlDbType.VarChar).Value = customer.HebrewName;
            //    sql_cmnd.Parameters.AddWithValue("@ENGLISH_NAME", SqlDbType.VarChar).Value = customer.EnglishName;
            //    sql_cmnd.Parameters.AddWithValue("@BIRTH_DATE", SqlDbType.Date).Value = customer.BirthDate;
            //    sql_cmnd.Parameters.AddWithValue("@CITY_CODE", SqlDbType.Int).Value = customer.City_code;
            //    sql_cmnd.Parameters.AddWithValue("@BANK", SqlDbType.Int).Value = customer.Bank;
            //    sql_cmnd.Parameters.AddWithValue("@BANK_BRANCH", SqlDbType.Int).Value = customer.Bank_branch;
            //    sql_cmnd.Parameters.AddWithValue("@ACCOUNT_NUMBER", SqlDbType.VarChar).Value = customer.Account_number;

            //    sql_cmnd.ExecuteNonQuery();
            //    sqlCon.Close();
            //}

            Customer newCustomer = Converter.Convert(customer);
            db.Customers.Add(newCustomer);
            db.SaveChanges();
            return newCustomer;
        }
        public static List<CustomerDTO> GetAllCustomers()
        {
            return db.Customers.ToList()?.Select(c => Converter.Convert(c)).ToList();
        }
    }
}
