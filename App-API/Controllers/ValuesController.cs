using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App_API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace JwtToken.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   // [Authorize]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpGet("{id}")]
        public ActionResult<string> GetValue(int id)
        {
            var valueModel = new ValueDto
            {
                Name = "SomeName",
                Id = id
            };
            return Content(JsonConvert.SerializeObject(valueModel)); 
        }
    }
}
