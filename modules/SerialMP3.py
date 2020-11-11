from machine import UART
from time import sleep

uart = UART(2, 9600)

STATUS_ERROR   = -1
STATUS_STOP    = 0
STATUS_PLAYING = 1
STATUS_PAUSE   = 2

def send(cmd, data=None):
    d = bytes([ 0x7E, 0x02 + (len(data) if data else 0), cmd ])
    if data: d = d + data
    d = d + b'\xEF'
    uart.write(d)
    sleep(0.05)
    data = uart.read()
    if not data: return False
    return data.index(b'\x7E\x02\x00\xEF') >= 0

def begin(rx_pin=27, tx_pin=26):
    uart.init(9600, bits=8, parity=None, stop=1, rx=rx_pin, tx=tx_pin)
    send(0x35, b'\x01') # Select storage device to TF card

def play(index=None):
    if index:
        send(0x41, bytes([ index >> 8, index & 0xFF ])) # Play with index
    else:
        send(0x01) # Play

def pause():
    send(0x02) # Pause

def next():
    send(0x03) # Next

def previous():
    send(0x04) # Previous

def stop():
    send(0x0E) # Stop play

def setVolume(level=50):
    send(0x31, bytes([ int(level / 100 * 0x1E) ])) # Set volume

def getStatus():
    uart.write(b'\x7E\x02\x10\xEF')# Get Status
    sleep(0.05)
    data = uart.read()
    if not data:
        print("Device timeout return")
        return -1
    headerIndex = data.index(b'\x7E\x03\x10')
    if headerIndex >= 0:
        return data[3 + headerIndex]
    else:
        print("Data error")
        return -1

def isPlaying():
    code = getStatus()
    return code == STATUS_PLAYING or code == 0x11

def waitPlayEnd():
    while isPlaying(): sleep(0.5)
