from pynput import keyboard

COMBINATIONS = [
    {keyboard.Key.shift, keyboard.KeyCode(char='a')}, 
]

# The currently active modifiers
current = set()

def on_press(key):
    pass

def on_release(key):
    pass

with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
]
def execute():
    print ("Hey [name] Shoot us a message @bohoseventy! We are looking for brand ambassadors to represent our brand. We feel like you would be a perfect fit! What do you think? ")

def on_press(key):
    if any([key in COMBO for COMBO in COMBINDATIONS]):
        current.add(key)
        if any(all(k in current for k in COMBO) for COMBO in COMBINATIONS):
                execute()

def on_release(key):
    if any([key in COMBO for COMBO in COMBINATIONS]):
        current.remove(key)

        # Hello 




