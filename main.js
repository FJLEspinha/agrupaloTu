import { createRandomGroups } from './src/utils'
import './style.css'

document.getElementById('group').addEventListener('click', handlerGroup)

function handlerGroup() {
 // const persons = ['ana', 'juana', 'ivana', 'juliana', 'mariana']
 let elements =document.getElementById('elements').value.split('\n')
 elements= elements.filter(e=>e!='')
 const groupsItems = parseInt(document.getElementById('groupsItems').value)
  const data = createRandomGroups(elements, groupsItems)
  //const inGroups = data.inGroups
  //const noGroups = data.noGroups
  const { inGroups, noGroups } = data
  console.log(inGroups,noGroups)
  let msg = ''

  inGroups.forEach(
    (group, i) => (msg += `Grupo '${i}':'${group.join(',')}+'<br/>`)
  )
  //inGroups.forEach((group,i) => msg+='Grupo '+i+':'+group.join(',')+'<br/>')
  msg += 'No está en grupo: ' + noGroups.join(',')
  document.getElementById('finalGroups').innerHTML = msg
}
