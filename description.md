    In a certain neuroscience experiment neuron "spikes" (brief voltage
spikes characterized by a single moment in time) are measured with an
electrode implanted into the cortex. Previous experiments have
demonstrated that three types of neurons are present (in roughly equal
number) at the experimental locations. These types are characterized
by morphological differences and firing rate differences. The firing
rates are: 2 times a second, 4 times a second, and 8 times a second.

Because of in vivo noise, sometimes a spike from a given neuron is not
recorded (imagine that noise swamps the local changes at the electrode
which would count as a spike). As a consequence, not every spike a
neuron produces is actually recorded. 

Assume that each neuron has a constant firing rate and a constant
missing spike rate. That is, each neuron fires either 2, 4 or 8 times
a second, and has a probability that the spike is recorded between 0
and 1. 

Because not all spikes are recorded for each neuron, a graduate
student destroys her vision after each experiment hand labeling each
neuron with its firing rate based on morphological
inspection. Unfortunately, the graduate student assigned to this task
has abruptly quit in order to pursue a lucrative startup in
Strasbourg, France and half your data is unlabeled. 

You are given a data set of recorded event times from 1000
neurons. Roughly half of them are labeled by their firing rate but the
other half are labeled "?". Given that you don't know the actual
recording success rate of any given neuron, how can you infer the
labels of the missing neurons AND the probability of recording a spike
from each?

