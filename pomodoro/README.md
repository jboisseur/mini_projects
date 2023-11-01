# 25 + 5 Clock
FreeCodeCamp projet for Front End Development Libraries certifification, built with React.

## User stories
- Expected elements
  - id="break-label" (string)
  - id="session-label" (string)
  - id="break-decrement" (clickable)
  - id="session-decrement" (clickable)
  - id="break-increment" (clickable)
  - id="session-increment" (clickable)
  - id="break-length" (default value is 5)
  - id="session-length" (default value is 25)
  - id="timer-label" (string)
  - id="time-left" (mm:ss)
  - id="start_stop" (clickable)
  - id="reset" (clickable)
  - id="beep" (audio tag)

- Functionnalities
  - click on break-decrement, break-increment, session-decrement, session-increment:
    - value of id="break-length" decrements/increments by 1
    - updated value is displayed
    - session or break length min = 1, max = 59
  - odd click on id="start_stop" (first, third...)
    - begin or resume running from the displayed value
    - time-left updates with remaining time (-1 every 1000ms)
  - even click on id="start_stop" (second, fourth...)
    - the countdown should pause
  - odd countdown reaches 00:00 (session)
    - timer-label should display "Break"
    - a sound should play (audio tag with id "beep")
    - break countdown begins
  - even countdown reaches 00:00 (break)
    - timer-label should display "Session"
    - session countdown begins
  - beep 
    - duration: at least 1 second
  - reset
    - stop beep if playing
    - restore default values

## Credits
The sound comes from https://lasonotheque.org/detail-2812-reveil-mecanique-sonnerie-9.html(https://lasonotheque.org/detail-2812-reveil-mecanique-sonnerie-9.html) (Joseph SARDIN)