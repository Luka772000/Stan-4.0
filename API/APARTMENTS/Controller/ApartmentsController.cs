using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APARTMENTS.Models;
using APARTMENTS.Dtos;
using Microsoft.AspNetCore.Authorization;
using AutoMapper.QueryableExtensions;
using AutoMapper;

namespace APARTMENTS.Controller
{   
    [Route("api/[controller]")]
    [ApiController]
    public class ApartmentsController : ControllerBase
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public ApartmentsController(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Apartments
        [HttpGet]   
        public async Task<IEnumerable<GetApartmentDto>> GetApartments()
        {
            
            return await _context.Apartments.ProjectTo<GetApartmentDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        // GET: api/Apartments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Apartment>>> GetApartment(int id)
        {
            var apartment = await _context.Apartments.Where(ap => ap.Id == id).Include(ad => ad.Adress).ToListAsync();

            if (apartment == null)
            {
                return NotFound();
            }

            return apartment;
        }

        // PUT: api/Apartments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutApartment(int id, Apartment apartment)
        {
            if (id != apartment.Id)
            {
                return BadRequest();
            }

            _context.Entry(apartment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApartmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
            
        // POST: api/Apartments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Apartment>> PostApartment(CreateApDto apartment)
        {
            var user = await _context.Users.FindAsync(apartment.OwnerId); 
            if (user == null)
                return NotFound();
            var newApartment = new Apartment
            {
                ApartmentDescription = apartment.ApartmentDescription,
                NumberOfRooms = apartment.NumberOfRooms,
                MonthlyPrice = apartment.MonthlyPrice,
                Owner = user
            };
            _context.Apartments.Add(newApartment);
            await _context.SaveChangesAsync();
            return Ok();
        }

        // DELETE: api/Apartments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApartment(int id)
        {
            var apartment = await _context.Apartments.FindAsync(id);
            if (apartment == null)
            {
                return NotFound();
            }

            _context.Apartments.Remove(apartment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ApartmentExists(int id)
        {
            return _context.Apartments.Any(e => e.Id == id);
        }
    }
}
