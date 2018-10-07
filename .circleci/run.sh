#!/bin/sh

timeout 15s yarn start
status=$?
if [ $status -eq 124 ] #timed out
then
    exit 0
fi
exit $status