using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public static class Converter
    {
        public static CityDTO Convert(City city)
        {
            return new CityDTO()
            {
                Id = city.id,
                Name = city.name
                
            };
        }
        public static City Convert(CityDTO city)
        {
            return new City()
            {
                id = city.Id,
                name = city.Name

            };
        }
        public static CustomerDTO Convert(Customer customer)
        {
            return new CustomerDTO()
            {
                Id = customer.id,
                HebrewName = customer.hebrewName,
                EnglishName = customer.englishName,
                BirthDate = customer.birthDate,
                City_code = customer.city_code,
                Bank = customer.bank,
                Bank_branch = customer.bank_branch,
                Account_number = customer.account_number,
                City =Converter.Convert(customer.City)
            };
        }
        public static Customer Convert(CustomerDTO customer)
        {
            return new Customer()
            {
                id = customer.Id,
                hebrewName = customer.HebrewName,
                englishName = customer.EnglishName,
                birthDate = customer.BirthDate,
                city_code = customer.City_code,
                bank = customer.Bank,
                bank_branch = customer.Bank_branch,
                account_number = customer.Account_number
            };
        }
    }
}
