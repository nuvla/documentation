#!/bin/sh

# NAME: NuvlaBox Peripheral Manager Mock
# DESCRIPTION: Mock peripheral manager for demonstration purposes only
# ARGS: none

# ---
# ASSUMPTION 1: our mock peripheral is a video device
# ASSUMPTION 2: when our mock peripheral is plugged, the file /dev/video0 is created
# ASSUMPTION 3: the identifier for our mock peripheral is always the same.
# IMPORTANT: assumption 3 should NOT be considered in real scenarios.
#            Make sure you infer the peripheral identifier dynamically, to avoid conflicts between peripherals
mock_peripheral_identifier="my-mock-peripheralXYZ"