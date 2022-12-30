using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CustomerDTO
    {
        public string Id { get; set; }
        public string HebrewName { get; set; }
        public string EnglishName { get; set; }
        public Nullable<System.DateTime> BirthDate { get; set; }
        public Nullable<int> City_code { get; set; }
        public Nullable<int> Bank { get; set; }
        public Nullable<int> Bank_branch { get; set; }
        public string Account_number { get; set; }

        public virtual CityDTO City { get; set; }
    }
}
