using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TokenWebAPI.Models;

namespace TokenWebAPI.Controllers
{
    public class TestController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult Register(RegisterBindingModel model)
        {
            return Ok();
        }

        [HttpGet]
       // [EnableCors(origins: "*", headers: "*", methods: "*")]
        public IHttpActionResult GetUsers()
        {
            angularTokenApiEntities entities = new angularTokenApiEntities();
            var data = entities.Users.ToList();
            return Ok(data);
        }

    }
}
