using DTO;
using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("customer")]
    public class CustomerController : ApiController
    {
        [HttpPost]
        [Route("addCustomer")]
        public IHttpActionResult AddCustomer(CustomerDTO customer)
        {
            try
            {
                //CustomerManager.AddCustomer(customer);
                CustomerDTO newCustomer = Converter.Convert(CustomerManager.AddCustomer(customer));
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest("system error" + e);
            }

        }

        [HttpGet]
        [Route("getAllCustomers")]
        public IHttpActionResult GetAllCustomers()
        {
            try
            {
                List<CustomerDTO> customers = CustomerManager.GetAllCustomers();
                return Ok(customers);
            }
            catch (Exception e)
            {
                return BadRequest("system error " + e);
            }

        }
    }
}
