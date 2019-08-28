# Conjugator App Endpoints

Base URL: https://sp-conjugator-be.herokuapp.com

## Register New User

**POST to /api/auth/register**

_Send:_

```
{
	"name": "Dave",
	"email": "email@email.com",
	"password": "password"
}
```

_Get Back:_

```
{
	"id": 8,
	"name": "Dave",
	"email": "email@email.com"
}
```

## Login

**POST to /api/auth/login**

_Send:_

```
{
	"email": "email@email.com",
	"password": "password"
}
```

_Get Back:_

```
{
	"message": "Welcome, Dave.",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJpYXQiOjE1NjY3Nzk1OTcsImV4cCI6MTU2Njg2NTk5N30.yFjcXl4OS3ielV0ROHZ2FhjS5s38JKqf2R2mwb5wA2o"
}
```

_Save the token to local storage and send in header of all requests that need the user to be authenticated._
_For logout behavior, delete the token from local storage._

## Get User Profile

**GET to /api/users/:id**

_Send user id as part of the url._
_Send token in request header using "Athorization" property._

```
{
	"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJpYXQiOjE1NjY3Nzk1OTcsImV4cCI6MTU2Njg2NTk5N30.yFjcXl4OS3ielV0ROHZ2FhjS5s38JKqf2R2mwb5wA2o"
}
```

_Get Back:_

```
{
  "id": 2,
  "name": "Dave",
  "email": "email@email.com",
  "daily_goal": 0,
  "daily_progress": 0,
  "streak_days": 0
}
```

## Update User Profile

**PUT to /api/users/:id**

_Send user id as part of the url._
_Send token in request header using "Athorization" property._

```
{
	"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJpYXQiOjE1NjY3Nzk1OTcsImV4cCI6MTU2Njg2NTk5N30.yFjcXl4OS3ielV0ROHZ2FhjS5s38JKqf2R2mwb5wA2o"
}
```

_Send updates in request body:_
_These properties may be updated: **name, email, daily_goal, daily_progress, streak_days**._

```
{
	"daily_goal": 5,
	"streak_days": 1
}
```

_Get Back the updated user:_

```
{
	"id": 2,
	"name": "testing",
	"email": "testing@email.com",
	"daily_goal": 5,
	"daily_progress": 0,
	"streak_days": 1
}
```

## Delete User

**DELETE to /api/users/:id**

_Send user id as part of the url._
_Send token in request header using "Athorization" property._

```
{
	"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJpYXQiOjE1NjY3Nzk1OTcsImV4cCI6MTU2Njg2NTk5N30.yFjcXl4OS3ielV0ROHZ2FhjS5s38JKqf2R2mwb5wA2o"
}
```

_Get Back the following:_

```
{
	"message": "Removed!"
}
```

## Get Verbs

**GET to /api/verbs**

_Get back the list of verbs:_

```
  {
    "id": 1,
    "verb": "hablar",
    "conjugation": "hablas",
    "tense": "Present",
    "form": "Tu",
    "sentence": "¿Así que hablar portugués? Qué variante, ¿la de Portugal o la de Brasil? "
  },
  {
    "id": 2,
    "verb": "hablar",
    "conjugation": "hablaríamos",
    "tense": "Conditional",
    "form": "Nosotros",
    "sentence": "Nuestro Presidente dijo anteriormente que hablar de la decoración. "
  },
  {
    "id": 3,
    "verb": "hablar",
    "conjugation": "hablará",
    "tense": "Future",
    "form": "Usted, él, ella",
    "sentence": "Todos sabemos que se hablar de ello en la reunión del Consejo Europeo. "
  },
  ...
```
