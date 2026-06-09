# -*- coding: utf-8 -*-
"""
Project Reality: BF2 - Module Template
"""

import host
import realityevents
import realitydebug
from game.realityconstants import *

# Module Globals
g_initialized = False

def onPlayerSpawn(player):
    """
    Called when a player spawns.
    """
    if not player or not player.isValid():
        return

    # logic here
    pass

def init():
    """
    Initializes the module. Called by realityinit.py.
    """
    global g_initialized
    if g_initialized:
        return

    # Register handlers
    realityevents.events.newRegisterHandler('PlayerSpawn', onPlayerSpawn)

    g_initialized = True
    realitydebug.logInfo("Module template initialized")

def deinit():
    """
    Called when the map ends or script is reloaded.
    """
    global g_initialized
    g_initialized = False
