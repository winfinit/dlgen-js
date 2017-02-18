# dlgen.js

State ID/Drivers license number generator, (currently support only Florida)

## Installation

```bash
  npm install dlgen 
```

## Usage

```javascript
  let {DLGenerator, DLPerson} = require('dlgen');

  let person = new DLPerson({
        firstName: "DOE", 
        lastName: "JOHN", 
        middleName: "", 
        dob: new Date(1984,10,26), 
        gender: "Male"
  });

  let dlGenerator = new DLGenerator(person); 

  dlGenerator.toFormattedString(); // J500-160-84-426-0
  dlGenerator.toString(); // J500160844260

```

## Tests

```bash
  npm test
```

## Contributing

If you find a bug or willing to add some enhancement, pull requests are very welcome

## Release History

* 0.0.1 Initial release

## Legal

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
