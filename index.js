let l='length',T=(k,v='string')=>typeof k==v,V=(A,B='')=>t=>Object.entries(A).map(([k,v])=>{if(Object.prototype.toString.call(v)=='[object Object]')return V(v,k+'.')(t[k]||{});else if(Array.isArray(v))v.map(f=>{if(T(f=f(t[k],B+k)))throw new Error(f)});else if(T(v=v(t[k],B+k)))throw new Error(v)})&&1,_=Z=>(x,k)=>x!==void 0&&x!==null?Z(x,k):1,Y=(m,k,t)=>m||k+' must be '+t,J=x=>Array.isArray(x)?'item':'character'
V.required=m=>(x,k)=>x!==void 0&&x!==null||m||k+' is required'
V.string=m=>_((x,k)=>T(x)||x instanceof String||Y(m,k,'a string'))
V.hasLength=(v,m)=>_((x,k)=>x[l]==v||Y(m,k,v+` ${J(x)}s long`))
V.minLength=(v,m)=>_((x,k)=>x[l]>=v||Y(m,k,`at least ${v} ${J(x)}s long`))
V.maxLength=(v,m)=>_((x,k)=>x[l]<=v||Y(m,k,`at most ${v} ${J(x)}s long`))
V.regex=(r,m)=>_((x,k)=>r.test(x)||m||k+` must match the regex `+r)
V.number=m=>_((x,k)=>T(x,'number')&&x==x||Y(m,k,'a number'))
V.bigint=m=>_((x,k)=>T(x,'bigint')||Y(m,k,'a bigint'))
V.min=(v,m)=>_((x,k)=>x>=v||Y(m,k,'greater than '+v))
V.max=(v,m)=>_((x,k)=>x<=v||Y(m,k,'less than '+v))
V.boolean=m=>_((x,k)=>x===!0||x===!1||Y(m,k,'a boolean'))
V.date=m=>_((x,k)=>x instanceof Date&&!isNaN(x)||Y(m,k,'a date'))
V.array=(Z,m)=>_((x,k)=>Array.isArray(x)&&(Z?x.map((v,i)=>{if(Array.isArray(Z))Z.map(f=>{if(T(f=f(v,k+`[${i}]`)))throw new Error(f)});else if(T(v=Z(v,k+`[${i}]`)))throw new Error(v)})&&1:1)||Y(m,k,'a valid array'))
export default V
