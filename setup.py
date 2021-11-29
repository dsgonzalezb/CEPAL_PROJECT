
from distutils.core import setup 
import py2exe

setup(console=["app.py"],
      data_files=[("data",
                   ["data"]),
                  ("gui",
                   ["gui"])],
)
