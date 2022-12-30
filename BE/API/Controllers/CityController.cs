using DTO;
using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;

namespace API.Controllers
{
    [RoutePrefix("city")]
    public class CityController : ApiController
    {
        [HttpGet]
        [Route("getAllCities")]
        public IHttpActionResult GetAllCities()
        {
            try
            {
                List<CityDTO> cities = CityManager.GetAllCities();
                return Ok(cities);
            }
            catch (Exception e)
            {
                return BadRequest("system error " + e);
            }

        }

    }
}
