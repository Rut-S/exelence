using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class CityManager
    {
        private static readonly execlenceTaskEntities db = DB.Instance;
        public static List<CityDTO> GetAllCities()
        {
            return db.Cities.ToList()?.Select(c => Converter.Convert(c)).ToList();
        }
    }
}
